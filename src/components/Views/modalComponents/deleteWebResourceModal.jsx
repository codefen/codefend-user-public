//Core packages
import { createSignal } from "solid-js";
import { FaSolidGlobe } from "solid-icons/fa";
import createModal from "../../../Store/modal.jsx";
import toast from "solid-toast";
import ButtonLoader from "../../ButtonLoader/buttonLoader.jsx";
import { WebResources } from "../../../Services/ApiHandlerV2/webResources.handler.js";
import createUser from "../../../Store/user.jsx";

function MobileAppModal(props) {
  const { showModal, setShowModal } = createModal;
  const [isDeletingResource, setIsDeletingResource] = createSignal(false);

  const { user } = createUser;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (props.onDelete) {
      props.onDelete();
      return;
    }
    setIsDeletingResource(true);
    WebResources.delete(props.id)
      .then(() => {
        props.onDone();
        setShowModal(!showModal());
        toast.success("Successfully Deleted Web Resource...");
      })
      .finally(() => {
        setIsDeletingResource(false);
      });
  };

  return (
    <>
      <div class="container flex items-center justify-center  mx-auto p-3 text-format">
        <form onSubmit={handleSubmit} class="p-6">
          <div class="mt-6 flex">
            <button
              type="button"
              disabled={isDeletingResource()}
              onClick={() => {
                setShowModal(!showModal());
              }}
              class="log-inputs text-gray focus:outline-none w-2/6 px-4 mr-2 py-3 text-sm tracking-wide text-white transition-colors duration-300 codefend_secondary_ac"
            >
              cancel
            </button>
            <button
              type="submit"
              disabled={isDeletingResource()}
              class="log-inputs flex flex-row items-center gap-x-2 text-white focus:outline-none bg-codefend px-6 w-4/6 py-3 text-sm tracking-wide text-white transition-colors duration-300 codefend_main_ac"
            >
              {(props.isDeleting || isDeletingResource()) && <ButtonLoader />}
              delete
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default MobileAppModal;
