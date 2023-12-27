///Core packages
import { lazy, Suspense, createSignal } from "solid-js";
import { Router } from "solid-app-router";

//Components
const Navbar = lazy(() => import("../components/Navbar/navbar.jsx"));
const Sidebar = lazy(() => import("../components/Sidebar/sidebar.jsx"));
const AdminPanel = lazy(() => import("../components/Views/adminPanel.jsx"));

function AdminPanelView() {
  return (
    <>
      <Router>
        {/* <Navbar/> */}
        {/* <Sidebar/> */}
        <AdminPanel />
      </Router>
    </>
  );
}

export default AdminPanelView;
