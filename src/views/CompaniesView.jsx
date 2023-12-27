///Core packages
import { lazy } from "solid-js";
import { Router } from "solid-app-router";

//Components
const Companies= lazy(() => import("../components/Views/companies.jsx"));

function CompaniesView() {
  return (
    <>
      <Router>
        <Companies />
      </Router>
    </>
  );
}

export default CompaniesView;
