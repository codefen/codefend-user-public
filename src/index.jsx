import { Show } from "solid-js";
import { render } from "solid-js/web";
import history from "./history";
import "./index.scss";
import { relaunch } from "@tauri-apps/api/process";
import { checkUpdate, installUpdate } from "@tauri-apps/api/updater";
import { listen } from "@tauri-apps/api/event";

import createUser from "./Store/user.jsx";
import createModal from "./Store/modal.jsx";
// Mobile implementation

//import { App as CapacitorApp } from "@capacitor/app";
import { clearAuth } from "./utils/helper";

import AppRoutes from "./AppRoutes.jsx";
import Navbar from "./components/Navbar/navbar.jsx";
import Sidebar from "./components/Sidebar/sidebar.jsx";
import { publicRoutes } from "./constantData/index.js";
import ErrorConnection from "./components/Views/viewComponents/ErrorConnection.jsx";

//CapacitorApp.addListener("backButton", ({ canGoBack }) => {
//if (canGoBack) {
//return history.go(-1);
//}
//});

// Tauri
const RUNNING_IN_TAURI = window.__TAURI__ !== undefined;
function startInstall() {
  //installUpdate().then(relaunch);
}

if (RUNNING_IN_TAURI) {
  try {
    listen("tauri://update-available", function (res) {
      console.log("New version available: ", res);
    });

    const { shouldUpdate, manifest } = await checkUpdate();
    console.log(shouldUpdate);
    if (shouldUpdate) {
      await installUpdate();
      await relaunch();
    }
  } catch(e) {
    alert(e)
  }
}

// user
const { user } = createUser;

function renderApp() {
  const { showModal, showModalStr } = createModal;
  const showErrorConnectionModal = () =>
    showModal() && showModalStr() === "error_connection";

  let currentTimestamp = Math.floor(Date.now() / 1000);
  if (!user() || currentTimestamp >= user().exp) {
    const currentUrl = new URL(window.location.href);
    const path = currentUrl.pathname;
    clearAuth();
    const pathRegex = /^\/auth\/signup\/[0-9a-fA-F]{32}$/;
    if (!publicRoutes.includes(path) && !pathRegex.test(path)) {
      history.push("/auth/signin");
    }
  }

  const isAuthPath = () => {
    const currentUrl = new URL(window.location.href);
    const pathName = currentUrl.pathname;
    const pathRegex = /^\/auth\/signup\/[0-9a-fA-F]{32}$/;
    if (publicRoutes.includes(pathName) || pathRegex.test(pathName)) {
      return true;
    } else {
      return false;
    }
  };

  render(
    () => (
      <>
        {showErrorConnectionModal() && <ErrorConnection />}
        <Show when={!isAuthPath()}>
          <Navbar />
          <Sidebar />
        </Show>
        <AppRoutes />
      </>
    ),
    document.getElementById("root")
  );
}

history.listen(({ action, location }) => {
  window.scrollTo(0, 0);
  if (["POP"].includes(action)) {
    history.go(0);
  }
  if (["PUSH"].includes(action)) {
    document.getElementById("root").innerHTML = "";
    renderApp();
  }
});

renderApp();
