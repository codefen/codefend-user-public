///Core packages
import { lazy } from "solid-js";
import { Router } from "solid-app-router";

//Components
const Sns = lazy(() => import("../components/Views/sns.jsx"));

function SnsView() {
  return (
    <>
      <Sns/>
    </>
  );
}

export default SnsView;
