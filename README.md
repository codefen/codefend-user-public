# Codefend Public User

### *Instalation and basic use:*

1) Proceed to download a copy of the code using the following command:
```
git clone https://github.com/codefen/codefend-user-public
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
Click on the link given on the terminal or open your browser and access http://localhost:3000

### *Create a new user in the application:*
Si todo salio como se esperaba durante el proceso de instalación, la aplicación abrirá un navegador en 127.0.0.1:3000 donde podrá iniciar sesión en la aplicación o crear un nuevo usuario.

```
1. Click en **new user** (lo llevará a http://localhost:3000/auth/signup).
2. Llenar con la información que corresponda:
  2.1. Las direcciones de email deberán corresponder con las usadas en los procesos previos.
  2.2. Les pedimos usar información real a fin de poder identificar a quienes realicen cambios.
  2.3. En el campo "company website" complete con "codefend.com" en caso de que no disponga un dominio.com propio.
3. Al finalizar el formulario **recibirá un email con un link hacia web.codefend.com**. Acceder al link.
4. Especifique sus credenciales, *le recomendamos usar una contraseña segura y fácil de recordar* como "paseando por? Córdoba 1998!".
5. Al enviar la información, la aplicación realizará una serie de procesos y le dará acceso a su cuenta.
6. Felicidades, este es el último itém de esta lista.
```

### *Consider you are in web.codefend.com now*

**Por favor, observe que el proceso lo ha enviado a terminar la registración desde web.codefend.com y la misma actualmente se encuentra desactualizada, por lo que Ud deberá cerrar sesión en web.codefend.com y regresar a la aplicación que se encuentra corriendo en su ordenador e iniciar sesión con las credenciales generadas.**

### *Going deeper: run with Tauri*

Esta sección está destinada a los profesionales que tengan experiencia con tecnologías similares a Electron. Codefend actualmente emplea Tauri, un framework similar a Electron. Tauri emplea Rust, un lenguage de programación que nos permite realizar ciertas acciones en los endpoints de los clientes que requiren vigilancia activa.

Codefend emplea algunos comandos los cuales nos permiten obtener información sobre las aplicaciones instaladas en el ordenador del cliente. Esta información luego es procesada, comparando las versiones de la misma y realizando búsquedas automaticas de vulnerabilidades que puedan afectar a estas aplicaciones. Para consecuentemente informar de esta manera al cliente con el fin de que pueda actualizar las mismas, o desinstalarlas si así lo desea.

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
