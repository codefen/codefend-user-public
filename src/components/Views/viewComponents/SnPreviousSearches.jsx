//Core packages
import { For, Show } from "solid-js";
import "/src/flags.css";
import { RiLogosWechatFill } from "solid-icons/ri";
// import {
//   defaultCompanyInfo,
//   defaultPreviousSearches,
// } from "../../../constantData";
import { PageLoader } from "../../../views/Loader";

function SnPreviousSearches(props) {
 
  return (
    <div class="h-full flex flex-col ">
      <div class="h-[36%] overflow-hidden">
        <div class="w-full internal-tables h-full ">
          <div class="py-3 px-5  flex flex-row gap-x-3.5 ">
            <RiLogosWechatFill class="codefend-text-red w-6 h-6" />
            <p class="text-small text-left font-bold title-format">
              PREVIOUS SEARCHES
            </p>
          </div>
          <Show when={!props.isLoading} fallback={() => <PageLoader />}>
            <div class="flex px-8 py-2 full-height overflow-auto ">
              <div class="w-full">
                <div class="flex p-3 text-format">
                  <section class="flex w-full">
                    <p class="text-base w-2/4">username:</p>
                    <p class="text-base w-2/4">search</p>
                  </section>
                </div>
                <div class="flex px-3 py-1 text-format">
                      <section class="flex w-full">
                        <p class="w-2/4">nacho</p>
                        <p class="text-base w-2/4">
                          codefend.com
                        </p>
                      </section>
                    </div>
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

export default SnPreviousSearches;
