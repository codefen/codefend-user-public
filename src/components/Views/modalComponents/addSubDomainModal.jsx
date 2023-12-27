//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import ApiHandler from "../../../Services/apiHandler.jsx";
import { FaSolidGlobe, FaSolidChartSimple } from "solid-icons/fa";
import createModal from "../../../Store/modal.jsx";
import createUser from "../../../Store/user.jsx";
import createResource from "../../../Store/resources";
import { WebResources } from "../../../Services/ApiHandlerV2/webResources.handler.js";
import toast from "solid-toast";
import ButtonLoader from "../../ButtonLoader/buttonLoader.jsx";

function SubDomainModal(props) {
  const { showModal, setShowModal } = createModal;
  const { resourcesStore } = createResource;
  const [mainDomainId, setMainDomainId] = createSignal(0);
  const [domainName, setDomainName] = createSignal("");
  const [ipAddress, setIpAddress] = createSignal("");
  const [isAddingSubDomain, setIsAddingSubDomain] = createSignal(false);
  const { user } = createUser;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mainDomainId() || mainDomainId().length == 0) {
      return toast.error("Invalid main resource");
    }

    if (
      !domainName() ||
      domainName().length == 0 ||
      domainName().length > 100
    ) {
      return toast.error("Invalid domain");
    }

    // if (!ipAddress() || ipAddress().length == 0 || ipAddress().length > 100) {
    //   return toast.error("Invalid ip address");
    // }
    setIsAddingSubDomain(true);

    // const requestBody = {
    //   company_id: user().read_array[0],
    //   resource_id: mainDomainId(),
    //   domain: domainName(),
    //   ip: ipAddress(),
    // };
    const requestParams = {
      resource_domain_dad: mainDomainId(),
      resource_address_domain: domainName(),
      // ip: ipAddress(),
    };

    // return ApiHandler.addWebSubResources(requestBody).then(() => {
    //   setShowModal(!showModal());
    // });

    WebResources.addSubResource(requestParams)
      .then((data) => {
        setShowModal(!showModal());
        props.onDone();
        toast.success("Successfully Added sub Domain..");
      })
      .finally(() => {
        setIsAddingSubDomain(false);
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
              <For each={props.webResources}>
                {(resource) => (
                  <option value={resource.id}>
                    {resource.resource_domain}
                  </option>
                )}
              </For>
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
              placeholder="domain name"
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
                setIpAddress(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs  focus:outline-none dark:text-gray-300 cursor-not-allowed"
              placeholder="IP address"
              disabled
            />
          </div>
          <div class="mt-6 flex">
            <button
              disabled={isAddingSubDomain()}
              type="button"
              onClick={() => {
                setShowModal(!showModal());
              }}
              class="log-inputs text-gray focus:outline-none w-2/6 px-4 mr-2 py-3 text-sm tracking-wide text-white transition-colors duration-300 codefend_secondary_ac"
            >
              cancel
            </button>
            <button
              disabled={isAddingSubDomain()}
              type="submit"
              class="log-inputs flex flex-row items-center gap-x-2 text-white focus:outline-none bg-codefend px-6 w-4/6 py-3 text-sm tracking-wide text-white transition-colors duration-300 codefend_main_ac"
            >
              {isAddingSubDomain() && <ButtonLoader />}
              add web resource
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SubDomainModal;
