//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import ApiHandler from "../../../Services/apiHandler.jsx";
import CompanyIndexView from "../viewComponents/CompanyIndexView";

function InternalNetworks() {
  const [showModal, setShowModal] = createSignal(false);
  const [companyName, setCompanyName] = createSignal("");
  const [companyURL, setCompanyURL] = createSignal("");
  const [companyCountry, setCompanyCountry] = createSignal("");
  const [companyAddress, setCompanyAddress] = createSignal("");
  const [companyCity, setCompanyCity] = createSignal("");
  const [companySize, setCompanySize] = createSignal("");

  // createEffect(() => {
  //   ApiHandler.getPanelCompanies().then((res) => {
  //     setCompanies(res.data);
  //   });
  // }, []);

  const handleCreateCompany = (e) => {
    e.preventDefault();

    const requestBody = {
      companyName: companyName(),
      companyWeb: companyURL(),
      companyAddress: companyAddress(),
      companySize: companySize(),
      companyCountry: companyCountry(),
      companyCity: companyCountry(),
    };

    return ApiHandler.createCompanyHandler(requestBody);
  };

  return (
    <>
      <Show when={showModal()}>
        <div
          onClick={() => {
            setShowModal(!showModal());
          }}
          class="fixed left-0 top-0 flex h-full w-full z-20 items-center justify-center bg-black bg-opacity-20 py-10"
        >
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            class="max-h-full max-w-xl overflow-y-auto bg-white"
          >
            <div class="w-full">
              <div class="w-full internal-tables">
                <div class="p-3 internal-tables-active flex">
                  <p class="text-small text-left font-bold title-format">
                    Add a new company
                  </p>
                </div>
                <div class="container flex items-center justify-center  mx-auto p-3 text-format">
                  <form class="p-6">
                    <div class="relative flex items-center mt-4">
                      <span class="absolute"></span>

                      <input
                        type="text"
                        onChange={(e) => {
                          setCompanyName(e.target.value);
                        }}
                        class="block w-full py-3 bg-white border px-11 log-inputs dark:text-gray-300"
                        placeholder="Company name"
                      ></input>
                    </div>

                    <div class="relative flex items-center mt-4">
                      <span class="absolute"></span>

                      <input
                        type="text"
                        onChange={(e) => {
                          setCompanyURL(e.target.value);
                        }}
                        class="block w-full py-3 bg-white border px-11 log-inputs dark:text-gray-300"
                        placeholder="Company URL"
                      ></input>
                    </div>
                    <div class="relative flex items-center mt-4">
                      <span class="absolute"></span>

                      <input
                        type="text"
                        onChange={(e) => {
                          setCompanySize(e.target.value);
                        }}
                        class="block w-full py-3 bg-white border px-11 log-inputs dark:text-gray-300"
                        placeholder="Company size"
                      ></input>
                    </div>
                    <div class="relative flex items-center mt-4">
                      <span class="absolute"></span>

                      <input
                        type="text"
                        onChange={(e) => {
                          setCompanyCountry(e.target.value);
                        }}
                        class="block w-full py-3 bg-white border px-11 log-inputs dark:text-gray-300"
                        placeholder="Company Country"
                      ></input>
                    </div>
                    <div class="relative flex items-center mt-4">
                      <span class="absolute"></span>

                      <input
                        type="text"
                        onChange={(e) => {
                          setCompanyCity(e.target.value);
                        }}
                        class="block w-full py-3 bg-white border px-11 log-inputs dark:text-gray-300"
                        placeholder="Company City"
                      ></input>
                    </div>
                    <div class="relative flex items-center mt-4">
                      <span class="absolute"></span>

                      <input
                        type="text"
                        onChange={(e) => {
                          setCompanyAddress(e.target.value);
                        }}
                        class="block w-full py-3 bg-white border px-11 log-inputs dark:text-gray-300"
                        placeholder="Company Adress"
                      ></input>
                    </div>
                    <div class="mt-6 internal-tables flex">
                      <button
                        onClick={() => {
                          setShowModal(!showModal());
                        }}
                        class="log-inputs w-2/6 px-4 mr-2 py-3 text-sm tracking-wide text-white transition-colors duration-300"
                      >
                        cancel
                      </button>
                      <button
                        onClick={(e) => {
                          handleCreateCompany(e);
                        }}
                        class="log-inputs bg-codefend px-6 w-4/6 py-3 text-sm tracking-wide text-white transition-colors duration-300"
                      >
                        create
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Show>

      <div class="w-full internal-tables">
        <div class="p-3 pl-8 internal-tables-active flex">
          <p class="text-small text-left font-bold title-format border-r pr-2">
            Current companies
          </p>
          <p
            onClick={() => {
              setShowModal(!showModal());
            }}
            class="text-small text-left font-bold title-format border-r px-2 underline cursor-pointer codefend-text-red"
          >
            Create new company
          </p>
        </div>

        {/* <div class="flex p-3 pl-8 text-format">
          <p class="text-base w-1/12">id</p>
          <p class="text-base w-4/12">company name</p>
          <p class="text-base w-3/12">country</p>
          <p class="text-base w-4/12">web</p>
        </div> */}
      </div>
      {/* <div class="w-full internal-tables internal-tables-scroll">
        <For each={companies()}>
          {(company) => (
            <div
              onClick={() => {
                setCompanyStore(company);
              }}
              class="flex pl-8 text-format cursor-pointer"
            >
              <p class="text-base w-1/12 pt-3 pb-3">{company.id}</p>
              <p class="w-4/12 text-base pt-3 pb-3">{company.name}</p>
              <p class="text-base w-3/12 pt-3 pb-3">{company.country}</p>
              <p class="text-base w-4/12 pt-3 pb-3">{company.web}</p>
            </div>
          )}
        </For>
      </div> */}
      <CompanyIndexView />
    </>
  );
}

export default InternalNetworks;
