//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import history from "../../history.jsx";
import { FaSolidGlobe, FaSolidPowerOff } from "solid-icons/fa";
import createUser from "../../Store/user.jsx";
import createModal from "../../Store/modal.jsx";
import Logo from "../Logo/logo.jsx";
import {
  clearAuth,
  deleteCustomBaseAPi,
  getCustomBaseAPi,
  isUserAdmin,
  setCustomBaseAPi,
} from "../../utils/helper.js";
import { TbNetwork } from "solid-icons/tb";
import { BiRegularEditAlt } from "solid-icons/bi";
import toast from "solid-toast";
import { baseUrl } from "../../utils/config.js";

const logOut = (e) => {
  const { setUser, user } = createUser;

  e.preventDefault();

  history.push("/auth/signin");
  setUser("");
  clearAuth();
};
const theme = () => {
  document.documentElement.classList.add("dark");
};

function Navbar() {
  const { user, setUser } = createUser;
  const { showModal, setShowModal, setShowModalStr, showModalStr } =
    createModal;
  const [canEdit, setCanEdit] = createSignal(false);

  const customApi = getCustomBaseAPi();
  const baseUrlToDisplay = baseUrl.slice(0, 9) + "".padEnd(8, "X");
  const defaultApiUrl = customApi ? customApi : baseUrlToDisplay;
  // console.log({ defaultApiUrl, customApi, baseUrl, baseUrlToDisplay });
  const [apiUrl, setApiUrl] = createSignal(defaultApiUrl);

  return (
    <>
      <nav>
        <Show when={showModal() && showModalStr() === "navbar_selector"}>
          <div
            onClick={() => {
              setShowModal(!showModal());
            }}
            class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-20 z-20"
          >
            <div
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              class="max-h-full max-w-xl overflow-y-auto bg-white"
            >
              <div class="w-full">
                <div class="w-full w-96 internal-tables">
                  <div class="p-3 internal-tables-active flex">
                    <p class="text-small text-left font-bold title-format">
                      Select a company
                    </p>
                  </div>
                  <div class="container flex items-center justify-center  mx-auto p-3 text-format"></div>
                </div>
              </div>
            </div>
          </div>
        </Show>
        <Show when={showModal() && showModalStr() === "logout_confirmation"}>
          <div
            onClick={() => {
              setShowModal(!showModal());
            }}
            class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-20 z-20 py-10"
          >
            <div
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              class="max-h-full max-w-xl overflow-y-auto bg-white"
            >
              <div class="w-full mt-4">
                <div class="w-full w-96 px-8 disable-border">
                  <div class="p-3 flex">
                    <p class="text-small text-left font-bold title-format">
                      Are you sure you want to Logout?
                    </p>
                  </div>
                  <div class="mt-6 flex justify-center">
                    <button
                      onClick={() => {
                        setShowModal(!showModal());
                      }}
                      class="btn btn-secondary mr-2"
                    >
                      cancel
                    </button>
                    <button
                      onClick={(e) => {
                        setShowModal(!showModal());
                        logOut(e);
                      }}
                      class="btn btn-primary"
                    >
                      logout
                    </button>
                  </div>
                  <div class="container flex items-center justify-center  mx-auto p-3 text-format"></div>
                </div>
              </div>
            </div>
          </div>
        </Show>

        <Show when={showModal() && showModalStr() === "network_setting"}>
          <div
            onClick={() => {
              setShowModal(!showModal());
            }}
            class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-20 z-20 py-10"
          >
            <div
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              class="max-h-full max-w-xl overflow-y-auto bg-white"
            >
              <div class="w-full mt-4">
                <div class="w-full w-96 px-8 disable-border">
                  <div class="p-3 flex">
                    <p class="text-small text-left font-bold title-format">
                      Network Setting
                    </p>
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <div class="flex flex-col">
                      <div class=" flex items-center w-[32rem] gap-x-2">
                        <input
                          value={apiUrl()}
                          disabled={!canEdit()}
                          type="url"
                          onChange={(e) => {
                            setApiUrl(e.target.value);
                          }}
                          class={`block w-full py-3 bg-white border px-2 log-inputs focus:outline-none dark:text-gray-300 ${
                            !canEdit() && "opacity-45"
                          }`}
                          placeholder="Enter API URI"
                          pattern="https://.*"
                          required
                        />
                        <div
                          onClick={() => {
                            setCanEdit((currentValue) => !currentValue);
                          }}
                          class="cursor-pointer"
                        >
                          <BiRegularEditAlt
                            class={`${
                              !canEdit() ? "text-[#afafaf]" : "text-[#ff3939]"
                            } w-8 h-8 cursor-pointer`}
                          />
                        </div>
                      </div>
                      <span
                        onClick={() => {
                          deleteCustomBaseAPi();
                          setApiUrl(baseUrlToDisplay);
                        }}
                        class="underline text-[#ff3939] text-right mr-10 mt-4 cursor-pointer"
                      >
                        click here to set back to default
                      </span>
                    </div>
                    <div class="mt-10 flex justify-center">
                      <button
                        type="button"
                        onClick={() => {
                          setShowModal(!showModal());
                        }}
                        class="btn btn-secondary mr-2"
                      >
                        cancel
                      </button>
                      <button
                        type="submit"
                        onClick={() => {
                          setCanEdit(false);
                          if (apiUrl().length < 10)
                            return toast.error("invalid API URL, too short");
                          setCustomBaseAPi(apiUrl());
                        }}
                        disabled={!canEdit()}
                        class="btn btn-primary"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                  <div class="container flex items-center justify-center  mx-auto p-3 text-format"></div>
                </div>
              </div>
            </div>
          </div>
        </Show>
        <div class="flex items-center justify-between w-full cursor-pointer">
          <a class="flex items-center">
            <span
              onClick={() =>
                isUserAdmin(user())
                  ? history.push("/admin/company")
                  : history.push("/")
              }
              class="self-center text-2xl font-semibold whitespace-nowrap"
            >
              <Logo theme="aim" />
            </span>
          </a>
          <div class="gap-x-6 flex items-center">
            <div
              title="Network Setting"
              class=""
              onClick={() => {
                setShowModal(!showModal());
                setShowModalStr("network_setting");
              }}
            >
              <TbNetwork class="w-5 h-5" />
            </div>

            <div title="Logout" class=" cursor-pointer">
              <FaSolidPowerOff
                onClick={(e) => {
                  setShowModal(!showModal());
                  setShowModalStr("logout_confirmation");
                }}
              />
            </div>
          </div>
        </div>
        {/* <div title="theme" class="power-off cursor-pointer">
          <FaSolidPowerOff
            onClick={(e) => {
              theme();
            }}
          />
        </div> */}
      </nav>
    </>
  );
}

export default Navbar;
