//Core packages
import { createSignal, createEffect, Show, For, onMount } from "solid-js";
import createUser from "../../../Store/user.jsx";
import ApiHandler from "../../../Services/apiHandler.jsx";
import { makeIntersectionObserver } from "@solid-primitives/intersection-observer";
import { PageLoader, PageLoaderOverlay } from "../../../views/Loader.jsx";
import { InxServices } from "../../../Services/ApiHandlerV2/inx.handler.js";

function InxSearchAndData(props) {
  const [searchData, setSearchData] = createSignal("");
  const [selectedResult, setSelectedResult] = createSignal(null);
  const [intelId, setIntelId] = createSignal("");
  const [intelData, setIntelData] = createSignal([]);
  const [intelPreview, setIntelPreview] = createSignal([]);
  const [loading, setLoading] = createSignal(false);
  const [offset, setOffset] = createSignal(0);
  const [count, setCount] = createSignal(0);
  const [fullDataLoading, setFullDataLoading] = createSignal(false);

  const { user } = createUser;
  createEffect(() => {
    if (!user()) return;
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("search")) {
      setSearchData(urlParams.get("search"));
      procSearch();
    }
  }, []);

  function filterAndHighlightLinesWithUrl(inputText, urlToFilter) {
    const lines = inputText.split("\n");
    const filteredLines = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes(urlToFilter)) {
        for (let j = i - 3; j < i; j++) {
          if (j >= 0) {
            filteredLines.push(lines[j] + "<br>");
          }
        }
        filteredLines.push(`<b>${line}</b><br>`);
        for (let j = i + 1; j <= i + 3; j++) {
          if (j < lines.length) {
            filteredLines.push(lines[j] + "<br>");
          }
        }
        filteredLines.push(
          `<hr class="w-24 h-1 bg-gray-100 border-0 rounded md:my-2 dark:bg-white">`
        );
      }
    }
    return filteredLines.join("\n");
  }

  const procSearch = (e) => {
    if (e) {
      e.preventDefault();
    }
    setLoading(true);
    setIntelData([]);
    setOffset(0);
    InxServices.initializeSearch(searchData())
      .then((res) => {
        console.log(res)
        setIntelId(res.response.id);
        setCount(res.response.count);

        return procIntelSearch();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const { add: intersectionObserver } = makeIntersectionObserver(
    [],
    (entries) => {
      entries.forEach((e) => procMoreResults(e));
    }
  );

  const procIntelSearch = () => {
    return InxServices.search({
      id: intelId(),
      offset: offset(),
    })
      .then((res) => {
        const intelResult = res.response.map((intel) => {
          intel.preview = "";
          return intel;
        });
        const intelProc = intelData().concat(intelResult);
        setIntelData(intelProc);
        props.refetchPreviousSearches();
        setOffset(offset() + intelResult.length);
        processAllIntelData(intelResult);
      })
      .catch((err) => {
      });
  };

  const procMoreResults = () => {
    if (!loading()) {
      return procIntelSearch();
    }
  };
  const processPreview = (intel) => {
    return InxServices.preview({
      sid: intel.storage_id,
      bid: intel.bucket_id,
      mid: intel.media_id,
    })
      .then((res) => {
        console.log(res)
        if (!res.preview) return;
        const intelPreviewData = intelPreview();
        intelPreviewData.push({
          id: intel.storage_id,
          preview: res.preview,
        });
        setIntelPreview(intelPreviewData);
        let intelDataP = intelData();
        setIntelData([]);
        return setIntelData(intelDataP);
      });
  };

  function time(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  const processAllIntelData = async (inputData) => {
    for (const intel of inputData) {
      processPreview(intel);
    }
    await time(4000);
    if (offset() < count()) {
      setLoading(false);
    }
  };

  const procReadFile = (intel) => {
    setFullDataLoading(true);
    InxServices.read({
      sid: intel.storage_id,
      bid: intel.bucket_id,
    })
      .then((res) => {
        if (res.intel) {
          setSelectedResult({
            file: res.intel,
            file_name: intel.name,
            file_type: intel.bucket_data,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFullDataLoading(false);
      });
  };

  return (
    <div class="border h-5/6 pt-3">
      <Show when={selectedResult()}>
        <div class="fixed left-0 top-0 h-full w-full bg-gray-500 bg-opacity-25 overflow-y-hidden overflow-x-hidden outline-none">
          <div class="pointer-events-none relative w-auto translate-y-[50px] transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px]">
            <div class="pointer-events-auto relative flex w-full flex-col border-none bg-white bg-clip-padding text-black dark:text-current shadow-lg outline-none dark:bg-neutral-600 ">
              <div class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                <h5 class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                  {selectedResult().file_name}, {selectedResult().file_type}
                </h5>
                <button
                  onClick={() => setSelectedResult(null)}
                  type="button"
                  class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div class="relative p-4 max-h-[48rem] h-full overflow-y-scroll">
                <h3 class="text-xl font-bold leading-normal text-neutral-800 dark:text-neutral-200">
                  Main results
                </h3>

                <div
                  class="max-w-md text-xs break-words"
                  innerHTML={filterAndHighlightLinesWithUrl(
                    selectedResult().file,
                    searchData()
                  )}
                ></div>

                <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                <h3 class="text-xl font-bold leading-normal text-neutral-800 dark:text-neutral-200">
                  Full list
                </h3>
                <div
                  class="max-w-md text-xs break-words"
                  innerHTML={selectedResult().file.replace(
                    /(\r\n|\n|\r)/g,
                    "<br>"
                  )}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </Show>

      <form onSubmit={procSearch} class="flex flex-row h-9 mb-4 px-3">
        <input
          type="text"
          value={searchData()}
          onChange={(e) => setSearchData(e.target.value)}
          placeholder="Search"
          class="px-6 w-full h-full"
          required
        />
        <button
          type="submit"
          class="btn btn-primary no-border-height w-14 items-center justify-center"
        >
          <img
            class="w-3.5 h-3.5"
            src="/codefend/icon-spy.png"
            alt="icon-spy"
          />
        </button>
      </form>
      
      <Show when={!loading()} fallback={() => <PageLoader />}>
        <div class="flex internal-tables flex-col overflow-auto max-h-full overflow-x-hidden">
          <For each={intelData()}>
            {(intel) => (
              <div>
                <div class="w-full flex flex-row h-10 bg-[#f0f0f0] text-[#333]">
                  <div class="w-full red-border flex flex-row items-center px-7 ">
                    <input type="checkbox" checked class=" checkbox-color" />
                    <span class="flex-grow ml-3">
                      {intel?.name?.slice(0, 50)}
                    </span>
                    <span class="flex-grow ml-3">{intel.bucket_data}</span>
                    <span class="text-[#666] text-xs">{intel.date}</span>
                  </div>
                  <button
                    onClick={() => {
                      procReadFile(intel);
                    }}
                    class="btn btn-primary no-border-height h-full items-center justify-center text-sm w-[5.3rem] no-padding "
                  >
                    full data
                  </button>
                </div>

                <div class="w-full internal-tables disable-border no-border border-bottom py-2">
                  <div>
                    <div class="flex py-0.5 pl-14 pr-10">
                      <div
                        class="max-w-md"
                        innerHTML={intelPreview()
                          .find((preview) => preview.id === intel.storage_id)
                          ?.preview?.replace(/(\r\n|\n|\r)/g, "<br>")}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </For>
          <div use:intersectionObserver></div>
        </div>
      </Show>
      {fullDataLoading() && <PageLoaderOverlay />}
    </div>
  );
}

export default InxSearchAndData;
