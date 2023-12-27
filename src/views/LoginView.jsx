///Core packages
import { lazy, Suspense, createSignal } from "solid-js";
import { Router } from "solid-app-router";

//Components
const Login = lazy(() => import("../components/Views/signin.jsx"));

function DashboardView() {
  return (
    <>
      <Router>
        <Login />
      </Router>
    </>
  );
}

export default DashboardView;
