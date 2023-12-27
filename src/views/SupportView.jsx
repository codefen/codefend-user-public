///Core packages
import { lazy } from "solid-js";
import { Router } from "solid-app-router";

//Components
const Navbar = lazy(() => import("../components/Navbar/navbar.jsx"));
const Sidebar = lazy(() => import("../components/Sidebar/sidebar.jsx"));
const Support = lazy(() => import("../components/Views/support.jsx"));

function SupportView() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        {/* <Sidebar /> */}
        <Support />
      </Router>
    </>
  );
}

export default SupportView;
