///Core packages
import { lazy } from "solid-js";
import { Router } from "solid-app-router";

//Components
const Enp = lazy(() => import("../components/Views/enp.jsx"));

function VdbView() {
  return (
    <>
      <Enp/>
    </>
  );
}

export default VdbView;
