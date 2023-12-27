//Core packages
import { For, Show } from "solid-js";
import "/src/flags.css";
import { RiLogosWechatFill } from "solid-icons/ri";
// import {
//   defaultCompanyInfo,
//   defaultPreviousSearches,
// } from "../../../constantData";
import { PageLoader } from "../../../views/Loader";

function InxPreviousSearches(props) {
  // const [previousSearches, setPreviousSearches] = createSignal(
  //   defaultPreviousSearches
  // );

  return (
    <div class="h-full flex flex-col ">
      <div class="h-[76%] overflow-hidden">
        <div class="w-full internal-tables h-full ">
          <div class="py-3 px-5 internal-tables-active flex flex-row items-center gap-x-3.5 ">
            <RiLogosWechatFill class="codefend-text-red w-6 h-6" />
            <p class="text-small text-left font-bold title-format">
              PREVIOUS SEARCHES
            </p>
          </div>
          <Show when={!props.isLoading} fallback={() => <PageLoader />}>
            <div class="flex px-8 py-2 internal-tables-scroll full-height overflow-auto ">
              <div class="w-full">
                <div class="flex p-3 text-format">
                  <section class="flex w-full">
                    <p class="text-base w-2/4">username:</p>
                    <p class="text-base w-2/4">search</p>
                  </section>
                </div>

                <For each={props.previousSearches.reverse() ?? []}>
                  {(info) => (
                    <div class="flex px-3 py-1 text-format">
                      <section class="flex w-full items-center">
                        <p class="w-2/4">{info.username}</p>
                        <p class="text-base w-2/4">
                          {info.informacion.split("queries:")[1] ?? "--"}
                        </p>
                      </section>
                    </div>
                  )}
                </For>
              </div>
            </div>
          </Show>
        </div>
      </div>
      <button
        onClick={(e) => {
          alert("Processing your order");
        }}
        class="btn btn-primary full-w mt-4"
      >
        REQUEST PROFESSIONAL ASSISTANCE
      </button>
    </div>
  );
}

export default InxPreviousSearches;
