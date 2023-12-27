//Core packages
import { createSignal } from "solid-js";
import { FaSolidGlobe } from "solid-icons/fa";
import createModal from "../../../Store/modal.jsx";
import toast from "solid-toast";
import { MobileApplicationServices } from "../../../Services/ApiHandlerV2/mobileApplication.handler.js";
import ButtonLoader from "../../ButtonLoader/buttonLoader.jsx";
import { CloudServices } from "../../../Services/ApiHandlerV2/cloud.handler.js";

function CloudModal(props) {
  const { showModal, setShowModal } = createModal;
  const [appName, setAppName] = createSignal("");
  const [provider, setProvider] = createSignal("");
  const [description, setDescription] = createSignal("");
  // const [resourceCloud, setResourceCloud] = createSignal("");
  const [isAddingMobile, setIsAddingMobile] = createSignal("");
  console.log({ modalProps: props });
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAddingMobile(true);

    if (!appName() || appName().length == 0 || appName().length > 150) {
      toast.error("Invalid app name");
      return setIsAddingInternalNetwork(false);
    }

    const requestParams = {
      llave_1: "",
      llave_2: "",
      llave_3: "",
      provider: provider(),
      name: appName(),
      desc: description(),
      // resources_cloud: resourceCloud(),
    };

    CloudServices.add(requestParams)
      .then(() => {
        props.onDone();
        setShowModal(!showModal());
        toast.success("Successfully Added Cloud...");
      })
      .finally(() => {
        setIsAddingMobile(false);
      });
  };

  return (
    <>
      <div class="container flex items-center justify-center  mx-auto p-3 text-format">
        <form onSubmit={handleSubmit} class="p-6">
          <div class="relative flex items-center w-96">
            <span class="absolute">
              <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red" />
            </span>

            <select
              onChange={(e) => {
                setProvider(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300"
              required
            >
              <option value="" disabled selected>
                Provider
              </option>
              <option value="azure">Azure</option>
              <option value="aws">AWS</option>
              <option value="google">Google</option>
            </select>
          </div>
          <div class="relative flex items-center w-96">
            <span class="absolute">
              <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red" />
            </span>

            <input
              type="text"
              onChange={(e) => {
                setAppName(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300"
              placeholder="name"
              required
            />
          </div>

          <div class="relative flex items-center w-96">
            <span class="absolute">
              <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red" />
            </span>

            <input
              type="text"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300"
              placeholder="description"
              required
            />
          </div>
          {/* <div class="relative flex items-center w-96">
            <span class="absolute">
              <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red" />
            </span>

            <input
              type="text"
              onChange={(e) => {
                setResourceCloud(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300"
              placeholder="cloud link"
              required
            />
          </div> */}
          <div class="mt-6 flex">
            <button
              type="button"
              disabled={isAddingMobile()}
              onClick={() => {
                setShowModal(!showModal());
              }}
              class="log-inputs text-gray focus:outline-none w-2/6 px-4 mr-2 py-3 text-sm tracking-wide text-white transition-colors duration-300 codefend_secondary_ac"
            >
              cancel
            </button>
            <button
              type="submit"
              disabled={isAddingMobile()}
              class="log-inputs flex flex-row items-center gap-x-2 text-white focus:outline-none bg-codefend px-6 w-4/6 py-3 text-sm tracking-wide text-white transition-colors duration-300 codefend_main_ac"
            >
              {isAddingMobile() && <ButtonLoader />}
              add cloud
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CloudModal;
