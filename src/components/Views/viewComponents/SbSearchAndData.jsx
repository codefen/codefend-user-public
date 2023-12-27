//Core packages
import { createSignal, createEffect, Show, For, onMount } from "solid-js";
import createUser from "../../../Store/user.jsx";
import ApiHandler from "../../../Services/apiHandler.jsx";
import { makeIntersectionObserver } from "@solid-primitives/intersection-observer";
import { PageLoader, PageLoaderOverlay } from "../../../views/Loader.jsx";
import { AiOutlineFileSearch } from 'solid-icons/ai'

function SbSearchAndData() {
  const [searchData, setSearchData] = createSignal("");
  const [searchClass, setSearchClass] = createSignal(false);
  const [intelData, setIntelData] = createSignal([]);
  const [loading, setLoading] = createSignal(false);

  const { user } = createUser;
  createEffect(() => {
    if (!user()) return;
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("search")) {
      setSearchData(urlParams.get("search"));
    }
    if (urlParams.get("class")) {
      setSearchClass(urlParams.get("class"));
    }

    if (searchClass() && searchData()) {
      procSearch();
    }
  }, []);

  const procSearch = (e) => {
    if (e) {
      e.preventDefault();
    }
    setLoading(true);
    setIntelData([]);
    ApiHandler.initializeSBData({
      keyword: searchData(),
      class: searchClass(),
    })
      .then((res) => {
        const arrayOfObjects = Object.entries(res.data.response.results).map(
          ([key, value]) => {
            const name = key.split("_").slice(1, -2).join("_");
            return { name, value };
          }
        );
        setIntelData(arrayOfObjects);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div class="search-bar">
        <div class="search-item">
          <form onSubmit={procSearch} class="">
            <input
              type="text"
              value={searchData()}
              onChange={(e) => setSearchData(e.target.value)}
              placeholder="Search"
              class="text"
              required
            />
            <div class="drop">
              <select
                class="select"
                value={searchClass()}
                onChange={(e) => setSearchClass(e.target.value)}
              >
                {/* <option selected>Choose a class</option> */}
                <option value="email" selected>email</option>
                <option value="username">username</option>
                <option value="password">password</option>
                <option value="name">full name</option>
              </select>

              <button
                type="submit"
                class="btn btn-primary"
              >
                <AiOutlineFileSearch />
              </button>
            </div>
          </form>
        </div>
      </div>
      <Show when={!loading()} fallback={() => <PageLoader />}>
        <div class="content">
          <For each={intelData()}>
            {(intel) => (
              <div class="search-result">
                <div class="header">
                  <div class="title">
                    {/* <input type="checkbox" checked class=" checkbox-color" /> */}
                    {intel?.name}
                  </div>
                </div>
                <div class="info">
                  <For each={intel?.value}>
                    {(subintel) => (
                      <For each={Object.keys(subintel)}>
                        {(subintelval) => (
                          <div class="text">
                            {`${subintelval}: ${subintel[subintelval]}`}
                          </div>
                        )}
                      </For>
                    )}
                  </For>
                </div> 
              </div>
            )}
          </For>
        </div>
      </Show>
    </>
  );
}

export default SbSearchAndData;
