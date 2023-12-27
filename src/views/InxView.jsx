///Core packages
import { lazy } from "solid-js";
import { Router } from "solid-app-router";

//Components
const Navbar = lazy(() => import("../components/Navbar/navbar.jsx"));
const Sidebar = lazy(() => import("../components/Sidebar/sidebar.jsx"));
const Inx = lazy(() => import("../components/Views/inx.jsx"));

function InxView() {
  return (
    <>
      {/* <Router> */}
      {/* <Navbar /> */}
      {/* <Sidebar /> */}
      <Inx />
      {/* </Router> */}
    </>
  );
}

export default InxView;
