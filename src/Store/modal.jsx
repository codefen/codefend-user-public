import { createSignal, createRoot } from "solid-js";

function createModal() {
  const [showModal, setShowModal] = createSignal(null);
  const [showModalStr, setShowModalStr] = createSignal(null);
  return { showModal, setShowModal, setShowModalStr, showModalStr };
}

export default createRoot(createModal);