///Core packages
import { lazy, Suspense, createSignal } from "solid-js";
import { Router } from "solid-app-router";

//Components
const Navbar = lazy(() => import("../components/Navbar/navbar.jsx"));
const Sidebar = lazy(() => import("../components/Sidebar/sidebar.jsx"));
const MobileApplication = lazy(() =>
  import("../components/Views/mobileApplication.jsx")
);

function MobileApplicationView() {
  return (
    <>
      <Router>
        {/* <Navbar/> */}
        {/* <Sidebar/> */}
        <MobileApplication />
      </Router>
    </>
  );
}

export default MobileApplicationView;
