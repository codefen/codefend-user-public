///Core packages
import { lazy, Suspense, createSignal } from "solid-js";
import { Router } from "solid-app-router";

//Components
const Issues = lazy(() => import("../components/Views/issues.jsx"));

function IssuesView() {
  return (
    <>
      <Router>
        <Issues />
      </Router>
    </>
  );
}

export default IssuesView;
