import { createSignal, createRoot } from "solid-js";

function createCompany() {
  const [companyStore, setCompanyStore] = createSignal(null);
  return { companyStore, setCompanyStore };
}

export default createRoot(createCompany);
