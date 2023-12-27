//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import { FaSolidGlobe, FaSolidChartSimple } from "solid-icons/fa";
import createModal from "../../../Store/modal.jsx";
import { InternalNetworkServices } from "../../../Services/ApiHandlerV2/internalNetwork.handler.js";
import toast from "solid-toast";
import ButtonLoader from "../../ButtonLoader/buttonLoader.jsx";

function AcessPointModal(props) {
  const { showModal, setShowModal } = createModal;
  const [domainName, setDomainName] = createSignal("");
  const [vendorName, setVendorName] = createSignal("");
  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [internalAddress, setInternalAddress] = createSignal("");
  const [externalAddress, setExternalAddress] = createSignal("");
  const [isAddingInternalNetwork, setIsAddingInternalNetwork] =
    createSignal(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsAddingInternalNetwork(true);

    if (!domainName() || domainName().length == 0) {
      toast.error("Invalid host name");
      return setIsAddingInternalNetwork(false);
    }

    if (!vendorName()) {
      toast.error("Invalid vendor name");
      return setIsAddingInternalNetwork(false);
    }

    if (!username() || username().length == 0) {
      toast.error("Invalid username");
      return setIsAddingInternalNetwork(false);
    }

    if (!password() || password().length == 0) {
      toast.error("Invalid password");
      return setIsAddingInternalNetwork(false);
    }

    const requestParams = {
      device_name: domainName(),
      device_version: vendorName(),
      access_username: username(),
      access_password: password(),
      device_in_address: internalAddress(),
      device_ex_address: externalAddress(),
    };

    InternalNetworkServices.add(requestParams)
      .then(() => {
        props.onDone();
        setShowModal(!showModal());
        toast.success("successfully added Access Point...");
      })
      .finally(() => {
        setIsAddingInternalNetwork(false);
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
                setVendorName(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300"
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
          <div class="relative flex items-center w-96 mt-4">
            <span class="absolute">
              <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red" />
            </span>

            <input
              type="text"
              onChange={(e) => {
                setInternalAddress(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300"
              placeholder="Internal IP Address"
              required
            />
          </div>
          <div class="relative flex items-center w-96 mt-4">
            <span class="absolute">
              <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red" />
            </span>

            <input
              type="text"
              onChange={(e) => {
                setExternalAddress(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300"
              placeholder="External IP Address"
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
                setUsername(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs  focus:outline-none dark:text-gray-300"
              placeholder="username"
              required
            />
          </div>
          <div class="relative flex items-center mt-4 w-96">
            <span class="absolute">
              <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red" />
            </span>

            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs  focus:outline-none dark:text-gray-300"
              placeholder="password"
              required
            />
          </div>
          <div class="mt-6 flex">
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

export default AcessPointModal;
