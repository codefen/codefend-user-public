///Core packages
import { lazy, Suspense, createSignal } from "solid-js";
import { Router } from "solid-app-router";

//Components
const SignUpFinish = lazy(() => import("../components/Views/signupfinish.jsx"));

function signUpFinish() {
  return (
    <>
      <Router>
        <SignUpFinish />
      </Router>
    </>
  );
}

export default signUpFinish;
