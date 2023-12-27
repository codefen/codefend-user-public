///Core packages
import { lazy, Suspense, createSignal } from "solid-js";
import { Router } from "solid-app-router";

//Components
const Navbar = lazy(() => import("../components/Navbar/navbar.jsx"));
const Sidebar = lazy(() => import("../components/Sidebar/sidebar.jsx"));
const SourceCode = lazy(() => import("../components/Views/sourceCode.jsx"));

function SourceCodeView() {
  return (
    <>
      <Router>
        {/* <Navbar/> */}
        {/* <Sidebar/> */}
        <SourceCode />
      </Router>
    </>
  );
}

export default SourceCodeView;
