import { createSignal, createRoot } from "solid-js";

function createInternalNetwork() {
  const [internalNetworksStore, setInternalNetworksStore] = createSignal(null);
  return { internalNetworksStore, setInternalNetworksStore };
}

export default createRoot(createInternalNetwork);