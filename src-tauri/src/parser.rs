use regex::Regex;
use serde_json::{json, Value};
use std::fs;
use std::io::Read;
use std::path::PathBuf;
use encoding_rs::WINDOWS_1252;

pub fn parse_wmic_output(output: &str) -> Value {
    let lines: Vec<&str> = output.lines().collect();
    
    if lines.len() < 2 {
        panic!("Not enough data in output");
    }

    let re = Regex::new(r"\s{2,}").expect("Failed to compile regex");
    let headers: Vec<&str> = re.split(lines[0].trim()).collect();

    let mut products = Vec::new();

    for line in &lines[1..] {
        let trimmed_line = line.trim();
        if trimmed_line.is_empty() {
            continue;
        }

        let values: Vec<&str> = re.split(trimmed_line).collect();
        if values.len() != headers.len() {
            eprintln!("Warning: Line does not match header length: {}", line);
            continue;
        }
        let mut product = serde_json::Map::new();

        for (h, v) in headers.iter().zip(values.iter()) {
            match *h {
                "Name" => { product.insert("Name".to_string(), json!(v.trim())); },
                "Vendor" => { product.insert("Vendor".to_string(), json!(v.trim())); },
                "Version" => { product.insert("Version".to_string(), json!(v.trim())); },
                "IdentifyingNumber" => { product.insert("IdentifyingNumber".to_string(), json!(v.trim())); },
                _ => {}
            }
        }

        product.insert("Type".to_string(), json!("wmic"));
        products.push(Value::Object(product));
    }

    json!(products)
}

pub fn parse_wing_output(output: &str) -> Value {
    let prefix = "Installed package is not available from any source: ";
    let mut software_list = Vec::new();

    for line in output.lines() {
        if line.starts_with(prefix) {
            let name = line.trim_start_matches(prefix);
            if !name.is_empty() {
                let software = json!({
                    "Name": name,
                    "Vendor": "",
                    "Version": "",
                    "IdentifyingNumber": "",
                    "Type": "wing"
                });
                software_list.push(software);
            }
        }
    }

    json!(software_list)
}

pub fn parse_hklm_output(output: &str) -> Value {
    let mut software_list = Vec::new();
    let name_range = 0..67;
    let version_range = 79..94;
    let vendor_range = 94..103;

    for line in output.lines().skip(2) {
        if line.len() >= vendor_range.end {
            let name = &line[name_range.clone()].trim();
            let version = &line[version_range.clone()].trim();
            let vendor = &line[vendor_range.clone()].trim();
            if !name.is_empty() && !name.starts_with("---") {
                let software = json!({
                    "Name": name,
                    "Vendor": vendor,
                    "Version": version,
                    "IdentifyingNumber": "",
                    "Type": "hklm"
                });
                software_list.push(software);
            }
        }
    }

    json!(software_list)
}

pub fn parse_appx_output(output: &str) -> Value {
    let mut software_list = Vec::new();

    let name_range = 0..48;
    let package_full_name_range = 48..;

    for line in output.lines().skip(2) {
        let line_len = line.len();
        let name = if line_len > name_range.end { &line[name_range.clone()].trim() } else { "" };
        let package_full_name = if line_len > package_full_name_range.start { &line[package_full_name_range.clone()].trim() } else { "" };

        if !name.is_empty() && !name.starts_with("----") {
            let software = json!({
                "Name": name,
                "PackageFullName": package_full_name,
                "IdentifyingNumber": "",
                "Vendor": "",
                "Version": "",
                "Type": "appx"
            });
            software_list.push(software);
        }
    }

    json!(software_list)
}

pub fn process_file(folder_path: &PathBuf, file_name: &str) -> Result<String, String> {
    let file_path = folder_path.join(file_name);

    let mut file = fs::File::open(file_path).map_err(|e| e.to_string())?;
    let mut buffer = Vec::new();
    file.read_to_end(&mut buffer).map_err(|e| e.to_string())?;

    let (output, _, _) = WINDOWS_1252.decode(&buffer);
    Ok(output.to_string())
}