#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// IMPORTS
use std::process::Command;
use mdns_sd::{ServiceDaemon, ServiceEvent};
use std::path::PathBuf;
use std::io;
use tauri::Builder;
use std::os::windows::process::CommandExt;
use winapi::um::winbase::CREATE_NO_WINDOW;
use std::fs::{self};
use serde_json::{json, Value};
use mac_address::get_mac_address;
mod parser;
 
// GLOBAL VARIABLES
const SHOULD_UPLOAD: bool = true;

    #[tauri::command]
    fn main() {
        Builder::default()
        .invoke_handler(
            tauri::generate_handler![scan_local, get_mac_addr],
        )
            .run(tauri::generate_context!())
            .expect("error while running tauri application");
    }


    // SCAN_LOCAL WINDOWS EXEC
    #[cfg(target_os = "windows")]
    #[tauri::command]
    async fn scan_local(session_id: String) -> Result<String, String> {
        if !admin_privileges() {
            return Err(r#"{"error": "Admin privileges required"}"#.to_string());
        }

        // TIMESTAMP
        let epoch_time = chrono::Utc::now().timestamp();

        // OUTPUT FOLDER
        let folder_name = format!("epoch_{}", epoch_time);
        let folder_path = PathBuf::from(&folder_name);
        if let Err(_e) = fs::create_dir(&folder_path) {
            return Err(r#"{"error": "Error executing the function"}"#.to_string());
        }

        // mDNS SERVICES
        //LAN
        discover_all_mdns_devices(&folder_path, "_services._dns-sd._udp").await?;
        //discover_all_mdns_devices(&folder_path, "_services._http._tcp.local").await?;
        //discover_all_mdns_devices(&folder_path, "_services._ftp._tcp.local").await?;
        //discover_all_mdns_devices(&folder_path, "_services._ssh._tcp.local").await?;
        //discover_all_mdns_devices(&folder_path, "_services._smb._tcp.local").await?;
        //discover_all_mdns_devices(&folder_path, "_services._ipp._tcp.local").await?;
        //discover_all_mdns_devices(&folder_path, "_services._whats-my-name._tcp.local").await?;

        // COMMANDS TO EXEC
        let commands = [
            //LAN
            //("powershell".to_string(), "netstat -n -a -p tcp -b".to_string(), "nsnap.txt".to_string()),

            //ENDPOINT
            ("powershell".to_string(), "Get-ItemProperty HKLM:\\Software\\Wow6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\* | Select-Object DisplayName, InstallDate, DisplayVersion, Publisher | Format-Table –AutoSize".to_string(), "hklm.txt".to_string()),
            ("powershell".to_string(), "Get-AppxPackage | Select Name, PackageFullName | Format-Table -AutoSize".to_string(), "appx.txt".to_string()),
            ("powershell".to_string(), "wmic product list brief".to_string(), "wmic.txt".to_string()),
            ("cmd".to_string(), format!("echo Y | winget export -o {} 2>&1 >> {}", folder_path.join("wing.txt").display(), folder_path.join("wing_errs.txt").display()), "wing.txt".to_string()),
            ];

        //para sacar los hostname en windows, para cada uno de los elementos de lan, corres:
        //arp -a | find "00-1A-2B-3C-4D-5E" (remplazar por la mac que corresponda)
        //y después corres:
        //nslookup 192.168.1.1 (remplazar por la ip que corresponda)
        //almacenas en "hname_arp" u "hname_nslookup" 

        // PROCESS EACH COMMAND
        for (cmd, args, file) in commands.iter() {
            let output_path = folder_path.join(file);
            if let Err(e) = exec_shell_command(cmd, args, output_path.to_str().unwrap()) {
                return Err(format!(r#"{{"error": "{}"}}"#, e.to_string()));
            }
        }
        let wmic_file = parser::process_file(&folder_path, "wmic.txt")?;
        let wmic_output: Vec<Value> = parser::parse_wmic_output(&wmic_file).as_array().unwrap().clone();
        let wing_file = parser::process_file(&folder_path, "wing.txt")?;
        let wing_output: Vec<Value> = parser::parse_wing_output(&wing_file).as_array().unwrap().clone();
        let hklm_file = parser::process_file(&folder_path, "hklm.txt")?;
        let hklm_output: Vec<Value> = parser::parse_hklm_output(&hklm_file).as_array().unwrap().clone();
        let appx_file = parser::process_file(&folder_path, "appx.txt")?;
        let appx_output: Vec<Value> = parser::parse_appx_output(&appx_file).as_array().unwrap().clone();

        let combined_output = [
            wmic_output,
            wing_output,
            hklm_output,
            appx_output
        ].concat();

        let final_output = json!(combined_output).to_string();

        // UPLOAD FILES
        if SHOULD_UPLOAD {
            upload_files(&final_output, &session_id).await?;
        }

        Ok(r#"{"success": "Scan completed successfully"}"#.to_string())
    }

    // EXECUTION FOR NON WINDOWS MACHINES

    //linux: dpkg -l
    //linux: rpm -qa
    //mac: ls /Applications

    #[cfg(not(target_os = "windows"))]
    #[tauri::command]
    async fn scan_local(session_id: String) -> Result<String, String> {
        Err(r#"{"error": "This function is only available on Windows"}"#.to_string())
    }


    #[tauri::command]
    async fn get_mac_addr() -> Result<String, String> {
        let mac_address_result = get_mac_address();
        let mac_address = match mac_address_result {
            Ok(Some(mac)) => mac.to_string(),
            Ok(None) => return Err("No MAC address found".to_string()),
            Err(e) => return Err(e.to_string()),
        };
    
        let json_response = json!({ "mac_address": mac_address }).to_string();
        Ok(json_response)
    }

    // UPLOADS FOLDER TO CODEFEND
    #[cfg(target_os = "windows")]
    async fn upload_files(
        parsed_data: &String, 
        session_id: &String,
    ) -> Result<(), String> {
        let url = format!(
            "http://localhost/kundalini/index.php?model=local_network/enp&ac=insert_enp&company_id=1&session={}",
            session_id
        );
        let client = reqwest::Client::new();

        // Get the MAC address
        let mac_address_result = get_mac_address();
        let mac_address = match mac_address_result {
            Ok(Some(mac)) => mac.to_string(),  // Convert MacAddress to String
            Ok(None) => return Err("No MAC address found".to_string()),
            Err(e) => return Err(e.to_string()),
        };


        let response = client.post(url)
            .form(&[
                ("parsed_data", &parsed_data),
                ("mac_address", &&mac_address),
            ])
            .send()
            .await
            .map_err(|e| e.to_string())?;

        let response_body = response.text().await.map_err(|e| e.to_string())?;
        println!("Response: {}", response_body);

        Ok(())
    }

// CHECKS ADMIN PRIVILEGES
#[cfg(target_os = "windows")]
fn admin_privileges() -> bool {
    is_elevated::is_elevated()
}

// EXECS CMD
#[cfg(target_os = "windows")]
fn exec_shell_command(command: &str, args: &str, output_file: &str) -> io::Result<()> {
    let full_command = format!("{} > {}", args, output_file);
    let output = if command == "powershell" {
        Command::new("powershell")
            .creation_flags(CREATE_NO_WINDOW)
            .arg("-Command")
            .arg(&full_command)
            .output()?
    } else {
        Command::new("cmd")
            .creation_flags(CREATE_NO_WINDOW)
            .arg("/C")
            .arg(&full_command)
            .output()?
    };

    if !output.status.success() {
        eprintln!("Command execution failed: {:?}", output.status);
        if let Some(127) = output.status.code() {
            return Err(io::Error::new(io::ErrorKind::Other, "The requested operation requires elevation."));
        }
        return Err(io::Error::new(io::ErrorKind::Other, "Command execution failed"));
    }

    Ok(())
}

// EXECS mDNS
async fn discover_all_mdns_devices(folder_path: &PathBuf, service_type: &str) -> Result<String, String> {
    use std::time::{Instant, Duration};
    use std::fs::File;
    use std::io::Write;

    let mdns = ServiceDaemon::new().expect("Failed to create daemon");
    let receiver = mdns.browse(service_type).expect("Failed to browse");

    let now = Instant::now();
    let mut output = String::new();

    while now.elapsed() < Duration::from_secs(1) {
        if let Ok(event) = receiver.recv() {
            match event {
                ServiceEvent::ServiceResolved(info) => {
                    let line = format!(
                        "At {:?}: Resolved a new service: {} host: {} port: {} IP: {:?} TXT properties: {:?}\n",
                        now.elapsed(),
                        info.get_fullname(),
                        info.get_hostname(),
                        info.get_port(),
                        info.get_addresses(),
                        info.get_properties(),
                    );
                    output.push_str(&line);
                },
                other_event => {
                    let line = format!("At {:?} : {:?}\n", now.elapsed(), &other_event);
                    output.push_str(&line);
                }
            }
        }
    }

    let file_name = format!("mdns_output-{}.txt", service_type);
    let file_path = folder_path.join(file_name);

    let mut file = File::create(&file_path).expect("Failed to create file");
    file.write_all(output.as_bytes()).expect("Failed to write to file");

    Ok(format!("Output saved to {}", file_path.display()))
}
