///Core packages
import { lazy, Suspense, createEffect } from "solid-js";
import { Router } from "solid-app-router";

//Components
const Navbar = lazy(() => import("../components/Navbar/navbar.jsx"));
const Sidebar = lazy(() => import("../components/Sidebar/sidebar.jsx"));
const Issue = lazy(() => import("../components/Views/issueDetail.jsx"));


// load timymc js
createEffect(() => {
  const script = document.createElement('script');
  script.src = "/editor/visual/mce/tinymce.min.js";
  script.async = true;
  document.body.appendChild(script);
  return () => {
    document.body.removeChild(script);
  }
}, []);


function IssuesView() {
  return (
    <>
      <Router>
        <Issue />
      </Router>
    </>
  );
}

export default IssuesView;
