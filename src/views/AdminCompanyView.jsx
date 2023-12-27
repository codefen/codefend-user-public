///Core packages
import { lazy, Suspense, createSignal } from "solid-js";
import { Router } from "solid-app-router";

//Components
const Navbar = lazy(() => import("../components/Navbar/navbar.jsx"));
const Sidebar = lazy(() => import("../components/Sidebar/sidebar.jsx"));
const AdminCompanyPanel = lazy(() =>
  import("../components/Views/adminCompanyPanel.jsx")
);

function AdminPanelView() {
  return (
    <>
      <Router>
        {/* <Navbar/> */}
        {/* <Sidebar/> */}
        <AdminCompanyPanel />
      </Router>
    </>
  );
}

export default AdminPanelView;
