///Core packages
import { lazy, Suspense, createSignal } from "solid-js";
import { Router } from "solid-app-router";

//Components
const Navbar = lazy(() => import("../components/Navbar/navbar.jsx"));
const Sidebar = lazy(() => import("../components/Sidebar/sidebar.jsx"));
const WebApplication = lazy(() =>
  import("../components/Views/webApplication.jsx")
);

function WebApplicationView() {
  return (
    <>
      <Router>
        <WebApplication />
      </Router>
    </>
  );
}

export default WebApplicationView;
