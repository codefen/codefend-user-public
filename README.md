# Codefend Public User

### *Instalation:*

1) Proceed to download a copy of the code using the following command:
```
git clone https://github.com/codefen/codefend-userpublic
```
2) Browse to the codefend-user-public folder:
```
cd codefend-user-public
```
3) Install packages and application dependencies using:
```
npm install
```
4) Initialize the application from the browser using the following command:
```
npm start
```


### *Run with Tauri*

*Dependencies: https://www.rust-lang.org/*

- Running dev:
```
npm run tauri dev
```
- Compile app:
```
npm run tauri build
```
- Create priv and pub key for signing
```
npm run tauri signer generate -- -w ~/.tauri/codefend.key
```
