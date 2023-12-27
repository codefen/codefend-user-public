///Core packages
import { lazy } from "solid-js";
import { Router } from "solid-app-router";

//Components
const Cloud = lazy(() => import("../components/Views/cloud"));

function CloudView() {
  return (
    <>
      <Router>
        <Cloud />
      </Router>
    </>
  );
}

export default CloudView;
