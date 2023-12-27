///Core packages
import { lazy, Suspense, createSignal } from "solid-js";
import { Router } from "solid-app-router";

//Components
const Navbar = lazy(() => import("../components/Navbar/navbar.jsx"));
const Sidebar = lazy(() => import("../components/Sidebar/sidebar.jsx"));
const SocialEngineering = lazy(() =>
  import("../components/Views/socialEngineering.jsx")
);

function SocialView() {
  return (
    <>
      <Router>
        {/* <Navbar/> */}
        {/* <Sidebar/> */}
        <SocialEngineering />
      </Router>
    </>
  );
}

export default SocialView;
