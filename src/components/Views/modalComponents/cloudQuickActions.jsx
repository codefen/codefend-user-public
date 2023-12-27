//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import VoxService from "../../../Services/apiHandler.jsx";
import { FaSolidGlobe, FaSolidChartSimple } from "solid-icons/fa";
import createModal from "../../../Store/modal.jsx";
import createUser from "../../../Store/user.jsx";
import { WebResources } from "../../../Services/ApiHandlerV2/webResources.handler.js";
import toast from "solid-toast";
import ButtonLoader from "../../ButtonLoader/buttonLoader.jsx";

function CloudQuickActions(props) {
  const { showModal, setShowModal } = createModal;
  const [domainName, setDomainName] = createSignal("");
  const [ipAddress, setIpAddress] = createSignal("");
  const [subdomainDetection, setSubdomainDetection] = createSignal(false);
  const { user } = createUser;
  const [isAddingDomain, setIsAddingDomain] = createSignal(false);

  const handleSubmit = (e) => {
    setIsAddingDomain(true);
    if (!domainName()) return;

    if (
      !domainName() ||
      domainName().length == 0 ||
      domainName().length > 100
    ) {
      toast.error("Invalid domain");
      return setIsAddingDomain(false);
    }

    const requestParams = {
      company_id: user().company_id,
      resource_address_domain: domainName(),
    };
    console.log({ requestParams });

    WebResources.addResource(requestParams)
      .then((data) => {
        setDomainName("");
        setShowModal(!showModal());
        props.onDone();
        toast.success("Successfully Added Domain..");
      })
      .finally(() => {
        setIsAddingDomain(false);
      });

    // return VoxService.addWebResources(requestBody).then(() => {
    //   setShowModal(!showModal());
    // });
  };

  return (
    <>
      <div class="container flex items-center justify-center  mx-auto p-3 text-format">
        <form onSubmit={handleSubmit} class="p-6">
          <div class="relative flex items-center w-96">
            <span class="absolute">
              <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red" />
            </span>

            <input
              type="text"
              onChange={(e) => {
                setDomainName(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300"
              placeholder="action"
              required
            />
          </div>

          {/* <div class="flex items-center mt-4 border-none">
            <input
              onClick={setSubdomainDetection(!subdomainDetection())}
              id="link-checkbox"
              type="checkbox"
              checked={subdomainDetection()}
              class="w-4 h-4 codefend-text-red bg-gray-100 border-gray-300 checkbox-color"
              required
            />
            <label for="link-checkbox" class="ml-3 text-sm font-medium">
              Automatic subdomain detection
            </label>
          </div> */}
          <div class="mt-6 flex">
            <button
              disabled={isAddingDomain()}
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
              disabled={isAddingDomain()}
              class="log-inputs flex flex-row items-center gap-x-2 text-white focus:outline-none bg-codefend px-6 w-4/6 py-3 text-sm tracking-wide text-white transition-colors duration-300 codefend_main_ac"
            >
              {isAddingDomain() && <ButtonLoader />}
              add action
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CloudQuickActions;
