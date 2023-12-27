//Core packages
import { createSignal, createEffect, Show, For, onMount } from "solid-js";
import createUser from "../../../Store/user.jsx";
import ApiHandler from "../../../Services/apiHandler.jsx";
import { makeIntersectionObserver } from "@solid-primitives/intersection-observer";
import { PageLoader, PageLoaderOverlay } from "../../../views/Loader.jsx";

function InxSearchAndData() {
  const [loading, setLoading] = createSignal(false);
  const [companies, setCompanies] = createSignal([]);
  const { user } = createUser;

  createEffect(() => {
    if (!user()) return;
    procSearch()
  }, []);

  const procSearch = (e) => {
    if(e) {
      e.preventDefault();
    }
    setLoading(true);
    ApiHandler.findUserCompany()
      .then((res) => {
        setCompanies(res.data.companies);
        console.log(res.data.companies);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };


  return (
    <div class="border h-5/6 pt-3">
      <Show when={!loading()} fallback={() => <PageLoader />}>
        <div class="flex internal-tables flex-col overflow-auto max-h-full overflow-x-hidden">
          <For each={companies()}>
            {(company) => (
              <div>
                <div class="w-full flex flex-row h-10 bg-[#f0f0f0] text-[#333]">
                  <div class="w-full red-border flex flex-row items-center px-7 ">
                    <input type="checkbox" checked class=" checkbox-color" />
                    <span class="flex-grow ml-3">
                      {company.name}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
}

export default InxSearchAndData;
 