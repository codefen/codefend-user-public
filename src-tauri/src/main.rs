use std::process::Command;
use mdns_sd::{ServiceDaemon, ServiceEvent};
use std::path::PathBuf;
use std::io;
//use std::net::IpAddr;
use tauri::Builder;
use std::os::windows::process::CommandExt;
use winapi::um::winbase::CREATE_NO_WINDOW;
//use std::fs::{self};
use serde_json::{json, Value};
use mac_address::get_mac_address;
use sys_info;
use local_ip_address;
use tokio::fs;
use reqwest;
mod parser;

#[tauri::command]
fn main() {
	
    tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![scan_local])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
	
	println!("Codefend running...");
}

#[tauri::command]
async fn scan_local(session_id: String) -> Result<(String, String, String, String, String), String> {
	
	println!("Inicializando scan local...");
    
	if !admin_privileges() {
        return Err("Admin privileges required".into());
    }

    let device_name = sys_info::hostname().unwrap_or_else(|_| "Unknown".to_string());
    let device_os_name = sys_info::os_type().unwrap_or_else(|_| "Unknown".to_string());
    let device_os_release = sys_info::os_release().unwrap_or_else(|_| "Unknown".to_string());

    let device_ip_i = local_ip_address::local_ip().unwrap_or_else(|_| "0.0.0.0".parse().unwrap()).to_string();
    let device_ip_e = get_external_ip().await.unwrap_or_else(|_| "Unknown".to_string());

	

    let epoch_time = chrono::Utc::now().timestamp();
    let folder_name = format!("epoch_{}", epoch_time);
    let folder_path = PathBuf::from(&folder_name);
    
	// Use tokio::fs for async file operations
    if let Err(_e) = fs::create_dir(&folder_path).await {
        return Err("Error executing the function".to_string());
    }

        //Pending...
        //discover_all_mdns_devices(&folder_path, "_services._dns-sd._udp").await?;
        //discover_all_mdns_devices(&folder_path, "_services._http._tcp.local").await?;
        //discover_all_mdns_devices(&folder_path, "_services._ftp._tcp.local").await?;
        //discover_all_mdns_devices(&folder_path, "_services._ssh._tcp.local").await?;
        //discover_all_mdns_devices(&folder_path, "_services._smb._tcp.local").await?;
        //discover_all_mdns_devices(&folder_path, "_services._ipp._tcp.local").await?;
        //discover_all_mdns_devices(&folder_path, "_services._whats-my-name._tcp.local").await?;
		//("powershell".to_string(), "netstat -n -a -p tcp -b".to_string(), "nsnap.txt".to_string()),
		//arp -a | find "00-1A-2B-3C-4D-5E" (remplazar por la mac que corresponda)
		//nslookup 192.168.1.1 (remplazar por la ip que corresponda)
		//"hname_arp" u "hname_nslookup" 

        //Doing...
        let commands = [
            ("powershell".to_string(), "Get-ItemProperty HKLM:\\Software\\Wow6432Node\\Microsoft\\Windows\\CurrentVersion\\Uninstall\\* | Select-Object DisplayName, InstallDate, DisplayVersion, Publisher | Format-Table –AutoSize".to_string(), "hklm.txt".to_string()),
            ("powershell".to_string(), "Get-AppxPackage | Select Name, PackageFullName | Format-Table -AutoSize".to_string(), "appx.txt".to_string()),
            ("powershell".to_string(), "wmic product list brief".to_string(), "wmic.txt".to_string()),
            ("cmd".to_string(), format!("echo Y | winget export -o {} 2>&1 >> {}", folder_path.join("wing.txt").display(), folder_path.join("wing_errs.txt").display()), "wing.txt".to_string()),
            ];

		// Run commands asynchronously
		for (cmd, args, file) in commands.iter() {
			let output_path = folder_path.join(file);
			if let Err(e) = exec_shell_command(cmd, args, output_path.to_str().unwrap()).await {
				return Err(format!(r#"{{"error": "{}"}}"#, e.to_string()));
			}
		}
		
		//wmic
        let wmic_file = parser::process_file(&folder_path, "wmic.txt")?;
        let wmic_output: Vec<Value> = parser::parse_wmic_output(&wmic_file).as_array().unwrap().clone();
		//wing
        let wing_file = parser::process_file(&folder_path, "wing.txt")?;
        let wing_output: Vec<Value> = parser::parse_wing_output(&wing_file).as_array().unwrap().clone();
		//hklm
        let hklm_file = parser::process_file(&folder_path, "hklm.txt")?;
        let hklm_output: Vec<Value> = parser::parse_hklm_output(&hklm_file).as_array().unwrap().clone();
		//appx
        let appx_file = parser::process_file(&folder_path, "appx.txt")?;
        let appx_output: Vec<Value> = parser::parse_appx_output(&appx_file).as_array().unwrap().clone();

        let combined_output = [
            wmic_output,
            wing_output,
            hklm_output,
            appx_output
        ].concat();

        let device_parsed_apps = json!(combined_output).to_string();
		
		
		/*push********************************************/
		
		let url = format!(
            "https://api.codefend.com/kundalini/index.php?model=resources/devices&ac=add&company_id=1&session={}",
            session_id
        );
        let client = reqwest::Client::new();

        // Get the MAC address
        let device_mac_address_result = get_mac_address();
        let device_mac_address = match device_mac_address_result {
            Ok(Some(mac)) => mac.to_string(),  // Convert MacAddress to String
            Ok(None) => return Err("No MAC address found".to_string()),
            Err(e) => return Err(e.to_string()),
        };


        let response = client.post(url)
            .form(&[
                ("device_name", &&device_name),
				("device_mac_address", &&device_mac_address),
				("device_parsed_apps", &&&device_parsed_apps),
				("device_os_name", &&device_os_name),
				("device_os_release", &&device_os_release),
				("device_ip_i", &&device_ip_i),
				("device_ip_e", &&device_ip_e),
            ])
            .send()
            .await
            .map_err(|e| e.to_string())?;

        let response_body = response.text().await.map_err(|e| e.to_string())?;
        println!("Response: {}", response_body);

        

		Ok((device_name, device_os_name, device_os_release, device_ip_i.to_string(), device_ip_e.to_string()))
}

//cambiar por una url de propia
async fn get_external_ip() -> Result<String, reqwest::Error> {
    let response = reqwest::get("https://api.ipify.org").await?.text().await?;
    Ok(response)
}


#[cfg(target_os = "windows")]
fn admin_privileges() -> bool { is_elevated::is_elevated() }

//exec en windows...
#[cfg(target_os = "windows")]
async fn exec_shell_command(command: &str, args: &str, output_file: &str) -> io::Result<()> {
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

//mdns
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
