//Core packages
import { createSignal, createEffect, Show, For, onMount } from "solid-js";
import "/src/flags.css";
import ApiHandler from "../../../Services/apiHandler.jsx";
import createCompany from "../../../Store/company.jsx";

function InternalNetworksChart() {
  const { companyStore, setCompanyStore } = createCompany;
  const [showModal, setShowModal] = createSignal(false);
  const [usersToShow, setUsersToShow] = createSignal([]);
  const [filterUsers, setFilterUsers] = createSignal([]);
  const [companyUsers, setCompanyUsers] = createSignal([]);
  const [selectedUser, setSelectedUser] = createSignal(null);

  // createEffect(() => {
  //   if (companyStore()) {
  //     ApiHandler.getPanelUsers().then((res) => {
  //       const usersMapped = res.data.map((user) => {
  //         return {
  //           id: user.id,
  //           name: user.name + " " + user.surname,
  //           canRead: user.read_array.includes(companyStore().id),
  //           canWrite: user.write_array.includes(companyStore().id),
  //           write_array: user.write_array,
  //           read_array: user.read_array,
  //         };
  //       });

  //       setUsersToShow(usersMapped);
  //     });
  //   }
  // }, [companyStore()]);

  const handleInputChange = (value) => {
    const maxResults = 3;
    let count = 0;

    const filteredArray = usersToShow().filter((item) => {
      if (count >= maxResults) {
        return false;
      }
      if (
        item.name.includes(value) &&
        !item.read_array.includes(companyStore().id) &&
        !item.write_array.includes(companyStore().id)
      ) {
        count++;
        return true;
      }
      return false;
    });

    setFilterUsers(filteredArray);
  };
  const handleAddUser = (e) => {
    e.preventDefault();

    const requestBody = {
      userId: selectedUser().id,
      companyId: companyStore().id,
      canWrite: selectedUser().canWrite,
      canRead: selectedUser().canRead,
    };

    return ApiHandler.addUserCompany(requestBody);
  };

  return (
    <>
      <Show when={showModal()}>
        <div
          onClick={() => {
            setShowModal(!showModal());
          }}
          class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-20 py-10"
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
                    Add a user to the company
                  </p>
                </div>
                <div class="container flex items-center justify-center  mx-auto p-3 text-format">
                  <form class="p-6">
                    <div class="relative flex items-center">
                      <span class="absolute"></span>

                      <Show
                        when={!selectedUser()}
                        fallback={
                          <span
                            onClick={() => {
                              setSelectedUser(null);
                            }}
                            class="block w-full py-3 px-11 log-inputs cursor-pointer dark:text-gray-300 text-xs"
                          >
                            {selectedUser().name}
                          </span>
                        }
                      >
                        <input
                          type="text"
                          onKeyUp={(e) => {
                            handleInputChange(e.target.value);
                          }}
                          class="block w-full py-3 bg-white px-11 log-inputs dark:text-gray-300"
                          placeholder="User name"
                        ></input>
                      </Show>
                    </div>
                    <For each={filterUsers()}>
                      {(user) => (
                        <div class="relative flex items-center">
                          <span
                            onClick={() => {
                              setSelectedUser(user), setFilterUsers([]);
                            }}
                            class="block w-full py-3 px-11 log-inputs cursor-pointer dark:text-gray-300 text-xs"
                          >
                            {user.name}
                          </span>
                        </div>
                      )}
                    </For>
                    <Show when={selectedUser()}>
                      <div class="flex items-center">
                        <input
                          id="link-checkbox"
                          type="checkbox"
                          checked={selectedUser().canRead}
                          onClick={() => {
                            setSelectedUser({
                              id: selectedUser().id,
                              name: selectedUser().name,
                              canRead: !selectedUser().canRead,
                              canWrite: selectedUser().canWrite,
                            });
                            setSelectedUser(...selectedUser(), {
                              canRead: !selectedUser().canRead,
                            });
                          }}
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        ></input>
                        <label
                          for="link-checkbox"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Read permission
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          id="link-checkbox"
                          type="checkbox"
                          checked={selectedUser().canWrite}
                          onClick={() => {
                            setSelectedUser({
                              id: selectedUser().id,
                              name: selectedUser().name,
                              canRead: selectedUser().canRead,
                              canWrite: !selectedUser().canWrite,
                            });
                            setSelectedUser(...selectedUser(), {
                              canWrite: !selectedUser().canWrite,
                            });
                          }}
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        ></input>
                        <label
                          for="link-checkbox"
                          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Write permission
                        </label>
                      </div>
                    </Show>
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
                          handleAddUser(e);
                        }}
                        class="log-inputs bg-codefend px-6 w-4/6 py-3 text-sm tracking-wide text-white transition-colors duration-300"
                      >
                        add
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Show>
      <Show
        when={companyStore()}
        fallback={
          <div class="w-full internal-tables mt-4">
            <div class="p-3 pl-8 internal-tables-active">
              <p class="text-small text-left font-bold title-format">
                Company details
              </p>
            </div>
            <div class="flex pl-8 text-format cursor-pointer">
              <p class="text-base pt-3 pb-3">No company selected</p>
            </div>
          </div>
        }
      >
        <div class="w-full internal-tables mt-4">
          <div class="p-3 pl-8 internal-tables-active">
            <p class="text-small text-left font-bold title-format">
              Company details
            </p>
          </div>
          <div class="flex pl-8 text-format cursor-pointer">
            <p class="text-base pt-3 pb-3">{`name: ${
              companyStore().name ?? ""
            }`}</p>
          </div>
          <div class="flex pl-8 text-format cursor-pointer">
            <p class="text-base pt-3 pb-3">{`website: ${
              companyStore().website ?? ""
            }`}</p>
          </div>
          <div class="flex pl-8 text-format cursor-pointer">
            <p class="text-base pt-3 pb-3">{`country: ${
              companyStore().country ?? ""
            }`}</p>
          </div>
          <div class="flex pl-8 text-format cursor-pointer">
            <p class="text-base pt-3 pb-3">{`city: ${companyStore().city}`}</p>
          </div>
          <div class="flex pl-8 text-format cursor-pointer">
            <p class="text-base pt-3 pb-3">{`address: ${
              companyStore().address ?? ""
            }`}</p>
          </div>
          <div class="flex pl-8 text-format cursor-pointer">
            <p class="text-base pt-3 pb-3">{`size: ${
              companyStore().size ?? ""
            }`}</p>
          </div>
        </div>
        <div class="w-full internal-tables mt-4 max-h-80 overflow-y-scroll">
          <div class="p-3 pl-8 internal-tables-active flex">
            <p class="text-small text-left font-bold title-format border-r pr-2">
              Company members
            </p>
            <p
              onClick={() => {
                setShowModal(!showModal());
              }}
              class="text-small text-left font-bold title-format border-r px-2 underline cursor-pointer codefend-text-red"
            >
              Add member
            </p>
          </div>
          <div class="flex p-3 pl-8 text-format">
            <p class="text-base w-1/12">id</p>
            <p class="text-base w-6/12">full name</p>
            <p class="text-base w-2/12">role</p>
            <p class="text-base w-2/12">permissions</p>
          </div>
          <Show when={usersToShow()}>
            {usersToShow()
              .filter((user) => user.read_array.includes(companyStore().id))
              .map((user) => {
                return (
                  <div
                    onClick={() => {
                      setSelectedUser(user);
                      setShowModal(!showModal());
                    }}
                    class="flex pl-8 text-format cursor-pointer"
                  >
                    <p class="text-base w-1/12 pt-3 pb-3">{user.id}</p>
                    <p class="w-6/12 text-base pt-3 pb-3">{user.name}</p>
                    <p class="text-base w-2/12 pt-3 pb-3"> - </p>
                    <p class="text-base w-2/12 pt-3 pb-3">{`Can write: ${user.write_array.includes(
                      companyStore().id
                    )}`}</p>
                  </div>
                );
              })}
          </Show>
        </div>
      </Show>
    </>
  );
}

export default InternalNetworksChart;
