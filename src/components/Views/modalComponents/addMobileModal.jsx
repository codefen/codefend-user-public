//Core packages
import { createSignal } from "solid-js";
import { FaSolidGlobe } from "solid-icons/fa";
import createModal from "../../../Store/modal.jsx";
import toast from "solid-toast";
import { MobileApplicationServices } from "../../../Services/ApiHandlerV2/mobileApplication.handler.js";
import ButtonLoader from "../../ButtonLoader/buttonLoader.jsx";

function MobileAppModal(props) {
  const { showModal, setShowModal } = createModal;
  const [appName, setAppName] = createSignal("");
  const [androidAddress, setAndroidAddress] = createSignal("");
  const [iosAddress, setIosAddress] = createSignal("");
  const [isAddingMobile, setIsAddingMobile] = createSignal("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAddingMobile(true);

    // if (!appName() || appName().length == 0 || appName().length > 150) {
    //   toast.error("Invalid app name");
    //   return setIsAddingInternalNetwork(false);
    // }

    if (androidAddress().length > 150) {
      toast.error("Invalid android address");
      return setIsAddingInternalNetwork(false);
    }

    if (iosAddress().length > 150) {
      toast.error("Invalid ios address");
      return setIsAddingInternalNetwork(false);
    }

    if (!androidAddress() && !iosAddress()) {
      toast.error("Kindly fill in field(s)");
      setIsAddingMobile(false);
      return;
    }

    const requestParams = {
      app_android_link: androidAddress(),
      app_apple_link: iosAddress(),
    };

    MobileApplicationServices.add(requestParams)
      .then(() => {
        props.onDone();
        setShowModal(!showModal());
        toast.success("Successfully Added Mobile App...");
      })
      .finally(() => {
        setIsAddingMobile(false);
      });
  };

  return (
    <>
      <div class="container flex items-center justify-center  mx-auto p-3 text-format">
        <form onSubmit={handleSubmit} class="p-6">
          {/* <div class="relative flex items-center w-96">
            <span class="absolute">
              <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red" />
            </span>

            <input
              type="text"
              onChange={(e) => {
                setAppName(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300"
              placeholder="application name"
              required
            />
          </div> */}

          <div class="relative flex items-center mt-4 w-96">
            <span class="absolute">
              <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red" />
            </span>

            <input
              type="text"
              onChange={(e) => {
                setAndroidAddress(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs  focus:outline-none dark:text-gray-300"
              placeholder="android download link"
            />
          </div>
          <div class="relative flex items-center mt-4 w-96">
            <span class="absolute">
              <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red" />
            </span>

            <input
              type="text"
              onChange={(e) => {
                setIosAddress(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs  focus:outline-none dark:text-gray-300"
              placeholder="ios download link"
            />
          </div>
          <div class="mt-6 flex">
            <button
              type="button"
              disabled={isAddingMobile()}
              onClick={() => {
                setShowModal(!showModal());
              }}
              class="log-inputs text-gray focus:outline-none w-2/6 px-4 mr-2 py-3 text-sm tracking-wide text-white transition-colors duration-300"
            >
              cancel
            </button>
            <button
              type="submit"
              disabled={isAddingMobile()}
              class="log-inputs flex flex-row items-center gap-x-2 text-white focus:outline-none bg-codefend px-6 w-4/6 py-3 text-sm tracking-wide text-white transition-colors duration-300 codefend_main_ac"
            >
              {isAddingMobile() && <ButtonLoader />}
              add mobile app
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default MobileAppModal;
