//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import ApiHandler from "../../../Services/apiHandler.jsx";

function InternalNetworks() {
  const [pendingUsers, setPendingUsers] = createSignal([]);

  const handleApprove = (id, condition) => {
    const requestBody = {
      user_id: id,
      approval: condition,
    };
    ApiHandler.approveUser(requestBody).then(() => {
      setPendingUsers(pendingUsers().filter((user) => user.id !== id));
    });
  };

  // createEffect(() => {
  //   ApiHandler.getPanelUsersApproval().then((res) => {
  //     setPendingUsers(res.data);
  //   });
  // }, []);

  return (
    <>
      <div class="w-full internal-tables">
        <div class="p-3 pl-8 internal-tables-active">
          <p class="text-small text-left font-bold title-format">
            Users to be approved
          </p>
        </div>

        <div class="flex p-3 pl-8 text-format">
          <p class="text-base w-1/12">id</p>
          <p class="text-base w-2/12">full name</p>
          <p class="text-base w-2/12">email</p>
          <p class="text-base w-1/12">country</p>
          <p class="text-base w-2/12">company</p>
          <p class="text-base w-2/12">role</p>
          <p class="text-base w-2/12">actions</p>
        </div>
      </div>
      <div class="w-full internal-tables internal-tables-scroll">
        <For each={pendingUsers()}>
          {(user) => (
            <div class="flex pl-8 text-format">
              <p class="text-base w-1/12 pt-3 pb-3">{user.id}</p>
              <p class="w-2/12 text-base pt-3 pb-3">{`${
                JSON.parse(user.json).user_name
              } ${JSON.parse(user.json).user_surname}`}</p>
              <p class="text-base w-2/12 pt-3 pb-3">
                {JSON.parse(user.json).user_email}
              </p>
              <p class="text-base w-1/12 pt-3 pb-3">
                {JSON.parse(user.json).company_country}
              </p>
              <p class="text-base w-2/12 pt-3 pb-3">
                {JSON.parse(user.json).company_name}
              </p>
              <p class="text-base w-2/12 pt-3 pb-3">
                {JSON.parse(user.json).company_role}
              </p>
              <div class="inline-flex text-base w-1/12 pt-3 pb-3">
                <button
                  onClick={() => {
                    handleApprove(user.id, true);
                  }}
                  class="log-inputs text-gray-800 font-bold py-1 px-1 rounded-l"
                >
                  Appr
                </button>
                <button
                  onClick={() => {
                    handleApprove(user.id, false);
                  }}
                  class="log-inputs text-gray-800 font-bold py-1 px-1 rounded-r"
                >
                  Rej
                </button>
              </div>
            </div>
          )}
        </For>
      </div>
    </>
  );
}

export default InternalNetworks;
