//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import history from "../../history.jsx";
import { FaSolidPowerOff } from "solid-icons/fa";
import createUser from "../../Store/user.jsx";
import createModal from "../../Store/modal.jsx";
import Logo from "../Logo/logo.jsx";
import { clearAuth, isUserAdmin } from "../../utils/helper.js";

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
        <div class="flex items-center cursor-pointer">
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
        </div>
        {/* <div title="theme" class="power-off cursor-pointer">
          <FaSolidPowerOff
            onClick={(e) => {
              theme();
            }}
          />
        </div> */}
        <div title="Logout" class="power-off cursor-pointer">
          <FaSolidPowerOff
            onClick={(e) => {
              setShowModal(!showModal());
              setShowModalStr("logout_confirmation");
            }}
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
