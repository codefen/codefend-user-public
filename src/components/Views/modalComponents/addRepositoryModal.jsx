//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import ApiHandler from "../../../Services/apiHandler.jsx";
import { FaSolidGlobe, FaSolidChartSimple } from "solid-icons/fa";
import createModal from "../../../Store/modal.jsx";
import createUser from "../../../Store/user.jsx";
import toast from "solid-toast";
import { SourceCodeServices } from "../../../Services/ApiHandlerV2";
import ButtonLoader from "../../ButtonLoader/buttonLoader.jsx";

function MobileAppModal(props) {
  const { showModal, setShowModal } = createModal;
  const [repositoryName, setRepositoryName] = createSignal("");
  const [repositoryUrl, setRepositoryUrl] = createSignal("");
  const [sourceCode, setSourceCode] = createSignal("");
  const [visibility, setVisibility] = createSignal("");
  const [isAddingSourceCode, setIsAddingSourceCode] = createSignal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAddingSourceCode(true);

    if (
      !repositoryName() ||
      repositoryName().length == 0 ||
      repositoryName().length > 150
    ) {
      toast.error("Invalid name");
      return setIsAddingSourceCode(false);
    }

    if (
      !repositoryUrl() ||
      repositoryUrl().length == 0 ||
      repositoryUrl().length > 150
    ) {
      toast.error("Invalid url");
      return setIsAddingSourceCode(false);
    }

    if (!sourceCode() || sourceCode().length == 0 || sourceCode().length > 30) {
      toast.error("Invalid language");
      return setIsAddingSourceCode(false);
    }

    const requestParams = {
      name: repositoryName(),
      access_link: repositoryUrl(),
      source_code: sourceCode(),
      is_public: visibility(),
    };

    SourceCodeServices.getAll(requestParams)
      .then(() => {
        props.onDone();
        setShowModal(!showModal());
        toast.success("Successfully added source code ");
      })
      .finally(() => {
        setIsAddingSourceCode(false);
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

            <input
              type="text"
              onChange={(e) => {
                setRepositoryName(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300"
              placeholder="repository name"
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
                setRepositoryUrl(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs  focus:outline-none dark:text-gray-300"
              placeholder="repository url"
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
                setSourceCode(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs  focus:outline-none dark:text-gray-300"
              placeholder="source code language"
              required
            />
          </div>
          <div class="relative flex items-center w-96 mt-4">
            <span class="absolute">
              <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red" />
            </span>

            <select
              onChange={(e) => {
                setVisibility(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300"
              required
            >
              <option value="" disabled selected>
                visibility
              </option>
              <option value="public">public</option>
              <option value="private">private</option>
            </select>
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
              {isAddingSourceCode() && <ButtonLoader />}
              add repository
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default MobileAppModal;
