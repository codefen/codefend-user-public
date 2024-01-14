// Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import createUser from "../../../Store/user.jsx";
import ApiHandler from "../../../Services/apiHandler.jsx";
import { PageLoader } from "../../../views/Loader.jsx";
import { AiOutlineFileSearch } from "solid-icons/ai";
import { FaSolidBug } from "solid-icons/fa";
import { vdbColumnDef } from "../../Table/tableColumnDef.js";
import Table from "../../Table/index.jsx";
import toast from "solid-toast";

function VdbSearchAndData() {
  const [searchData, setSearchData] = createSignal("");
  const [VdbData, setVdbData] = createSignal([]);
  const [loading, setLoading] = createSignal(false);
  const [sortBy, setSortBy] = createSignal("");
  const { user } = createUser;

  const [selectedNow, setSelectedNow] = createSignal(false);

  const getSearchVulnerabilities = () => VdbData();

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
      keyword: searchData(),
    })
      .then((res) => {
        // const vulns = Object.entries(res.data.result);
        const vulns = res.data?.result;
        console.log({ vulns });
        if (vulns) setVdbData(vulns);
        else {
          const error = res.data?.response?.error;
          if (error) toast.error(error.replace("API", ""));
        }
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
      {Boolean(VdbData().length) && (
        <Show when={!loading()} fallback={() => <PageLoader />}>
          <div class="mx-3">
            <Table
              sortBy={sortBy}
              selectedNow={selectedNow}
              setSelectedNow={setSelectedNow}
              data={getSearchVulnerabilities}
              columns={vdbColumnDef}
              fieldsToHideOnMobile={["name", "score", "creacion"]}
              // maxHeight="42%"
            >
              <div class="header">
                <div class="title">
                  <div class="icon">
                    <FaSolidBug />
                  </div>
                  <span>Search vulnerabilities</span>
                </div>
                <select
                  onChange={(e) => {
                    console.log({ e });
                    setSortBy(e.target.value);
                    setSelectedNow(true);
                  }}
                  class="hidden md:inline bg-transparent ml-10"
                >
                  <option value="" selected disabled>
                    Sort by
                  </option>
                  <option value="creacion">published</option>
                  <option value="score">score</option>
                  <option value="risk">risk</option>
                  <option value="vdb id">vdb id</option>
                </select>
                <div class="actions"></div>
              </div>
            </Table>
          </div>
        </Show>
      )}
      <Show when={!loading()} fallback={() => <PageLoader />}>
        {/* <div class="content">
          <For each={VdbData()}>
            {(vuln) => (
              <div class="search-result">
                <div class="header">
                  <div class="title">{vuln.title}</div>
                </div>
              </div>
            )}
          </For>
        </div> */}
      </Show>
    </>
  );
}

export default VdbSearchAndData;
