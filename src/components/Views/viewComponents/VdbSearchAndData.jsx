// Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import createUser from "../../../Store/user.jsx";
import ApiHandler from "../../../Services/apiHandler.jsx";
import { PageLoader } from "../../../views/Loader.jsx";
import { AiOutlineFileSearch } from 'solid-icons/ai';

function VdbSearchAndData() {
  const [searchData, setSearchData] = createSignal('');
  const [VdbData, setVdbData] = createSignal([]);
  const [loading, setLoading] = createSignal(false);
  const { user } = createUser;

  createEffect(() => {
    if (!user()) return;
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.get("search")) {
      setSearchData(urlParams.get("search"));
    }

    if (searchData()) {
      procSearch();
    }
  }, []);

  const procSearch = (e) => {
    if (e) {
      e.preventDefault();
    }

    setLoading(true);
    setVdbData([]);

    ApiHandler.initializeVdbData({
      keyword: searchData()
    })
      .then((res) => {
        const vulns = Object.entries(res.data.result);
        setVdbData(vulns);
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
              placeholder="Enter a program name (e.g. Mozilla Firefox)"
              class="text"
              required
            />
            <button type="submit" class="btn btn-primary">
              <AiOutlineFileSearch />
            </button>
          </form>
        </div>
      </div>
      <Show when={!loading()} fallback={() => <PageLoader />}>
        <div class="content">
          <For each={VdbData()}>
            {(vuln) => (
              <div class="search-result">
                <div class="header">
                  <div class="title">
                    {vuln.title}
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>
      </Show>
    </>
  );
}

export default VdbSearchAndData;