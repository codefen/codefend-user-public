import { createSignal, createRoot } from "solid-js";

function createResource() {
  const [resourcesStore, setResourcesStore] = createSignal(null);
  return { resourcesStore, setResourcesStore };
}

export default createRoot(createResource);
