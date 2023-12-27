///Core packages
import { lazy, Suspense, createSignal } from "solid-js";
import { Router } from "solid-app-router";

//Components
const SignUp = lazy(() => import("../components/Views/signup.jsx"));

function DashboardView() {
  return (
    <>
      <Router>
        <SignUp />
      </Router>
    </>
  );
}

export default DashboardView;
