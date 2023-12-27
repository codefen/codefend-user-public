///Core packages
import { lazy } from "solid-js";
import { Router } from "solid-app-router";

//Components
const Navbar = lazy(() => import("../components/Navbar/navbar.jsx"));
const Sidebar = lazy(() => import("../components/Sidebar/sidebar.jsx"));
const Preferences = lazy(() => import("../components/Views/preferences.jsx"));

function PreferencesView() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        {/* <Sidebar /> */}
        <Preferences />
      </Router>
    </>
  );
}

export default PreferencesView;
