///Core packages
import { lazy, Suspense, createSignal } from "solid-js";
import { Router } from "solid-app-router";

//Components
const Navbar = lazy(() => import("../components/Navbar/navbar.jsx"));
const Sidebar = lazy(() => import("../components/Sidebar/sidebar.jsx"));
const InternalNetwork = lazy(() =>
  import("../components/Views/internalNetwork.jsx")
);

function InternalNetworkView() {
  return (
    <>
      <Router>
        {/* <Navbar/> */}
        {/* <Sidebar/> */}
        <InternalNetwork />
      </Router>
    </>
  );
}

export default InternalNetworkView;
