//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import ApiHandler from "../../../Services/apiHandler.jsx";
import { FaSolidGlobe, FaSolidChartSimple } from "solid-icons/fa";
import createModal from "../../../Store/modal.jsx";
import { InternalNetworkServices } from "../../../Services/ApiHandlerV2/internalNetwork.handler.js";
import toast from "solid-toast";
import ButtonLoader from "../../ButtonLoader/buttonLoader.jsx";
import history from "../../../history.jsx";

function NetworkDeviceModal(props) {
  const { showModal, setShowModal } = createModal;
  const [domainName, setDomainName] = createSignal("");
  const [vendorName, setVendorName] = createSignal("");
  const [mainDomainId, setMainDomainId] = createSignal(0);
  const [internalIpAddress, setInternalIpAddress] = createSignal("");
  const [externalIpAddress, setExternalIpAddress] = createSignal("");
  const [isAddingInternalNetwork, setIsAddingInternalNetwork] =
    createSignal(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mainDomainId() || mainDomainId().length == 0) {
      return toast.error("Invalid main resource");
    }

    if (!domainName() || domainName().length == 0) {
      return toast.error("Invalid host name");
    }

    const requestBody = {
      device_name: domainName(),
      //device_vendor: vendorName(),
      device_os: vendorName(),
      device_in_address: internalIpAddress(),
      device_ex_address: externalIpAddress(),
      resource_lan_dad: mainDomainId()
    };
    


    InternalNetworkServices.add(requestBody)
      .then(() => {
        toast.success("successfully added Sub Network...");
      })
      .finally(() => {
        setShowModal(!showModal());
        history.push(0)
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
                setMainDomainId(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300 modal_info"
              required
            >
              <option value="" disabled selected>
                main resource
              </option>
              <For
                each={props.internalNetwork}
              >
                {(resource) => (
                  <option
                    value={resource.id}
                  >{`${resource.device_name} - ${resource.device_ex_address}`}</option>
                )}
              </For>
            </select>
          </div>
          <div class="relative flex items-center w-96 mt-4">
            <span class="absolute">
              <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red" />
            </span>

            <select
              onChange={(e) => {
                setVendorName(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300 modal_info"
              required
            >
              <option value="" disabled selected>
                os / vendor
              </option>
              <option value="windows">windows</option>
              <option value="linux">linux</option>
              <option value="unknown">unknown</option>
              <option value="android">android</option>
              <option value="ios">ios</option>
            </select>
          </div>
          <div class="relative flex items-center w-96 mt-4">
            <span class="absolute">
              <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red" />
            </span>

            <input
              type="text"
              onChange={(e) => {
                setDomainName(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300"
              placeholder="hostname"
              required
            />
          </div>

          <div class="relative flex items-center mt-4 w-96">
            <span class="absolute">
              <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red" />
            </span>

            <input
              type="text"
              onChange={(e) => {
                setInternalIpAddress(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs  focus:outline-none dark:text-gray-300"
              placeholder="internal IP"
              required
            />
          </div>
          <div class="relative flex items-center mt-4 w-96">
            <span class="absolute">
              <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red" />
            </span>

            <input
              type="text"
              onChange={(e) => {
                setExternalIpAddress(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs  focus:outline-none dark:text-gray-300"
              placeholder="external IP"
            ></input>
          </div>
          <div class="mt-6  flex">
            <button
              type="button"
              onClick={() => {
                setShowModal(!showModal());
              }}
              class="log-inputs text-gray focus:outline-none w-2/6 px-4 mr-2 py-3 text-sm tracking-wide text-white transition-colors duration-300 codefend_secondary_ac"
            >
              cancel
            </button>
            <button
              type="submit"
              class="log-inputs flex flex-row items-center gap-x-2 text-white focus:outline-none bg-codefend px-6 w-4/6 py-3 text-sm tracking-wide text-white transition-colors duration-300 codefend_main_ac"
            >
              {isAddingInternalNetwork() && <ButtonLoader />}
              add access point
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default NetworkDeviceModal;
