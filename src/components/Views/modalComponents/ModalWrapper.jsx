import { createEffect, onCleanup } from "solid-js";
import createModal from "../../../Store/modal";

const ModalWrapper = (props) => {
  const { setShowModal } = createModal;

  createEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    });
    onCleanup(() => {
      document.removeEventListener("keydown", () => {
      });
    });
  }, []);

  return (
    <div
      onClick={(e) => {
        if (props.isErrorBox) return;
        if (e.currentTarget === e.target) {
          setShowModal(false);
        }
      }}
      class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-20 z-20 py-10"
    >
      <div
        class={`max-h-full  ${
          !props.isErrorBox ? "max-w-xl" : ""
        } overflow-y-auto `}
      >
        <div class="w-full ">{props.children}</div>
      </div>
    </div>
  );
};

export default ModalWrapper;
