///Core packages
import { lazy } from "solid-js";
import { Router } from "solid-app-router";

//Components
const Vdb = lazy(() => import("../components/Views/vdb.jsx"));

function VdbView() {
  return (
    <>
      <Vdb/>
    </>
  );
}

export default VdbView;
