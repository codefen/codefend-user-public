//Core packages
import { Show, For, createSignal } from "solid-js";
import "/src/flags.css";
import { PageLoader } from "../../../views/Loader";
import { formatDate } from "../../../utils/helper";
import history from "../../../history.jsx";
import { FaSolidBug } from "solid-icons/fa";
import EmptyCard from "./EmptyCard.jsx";
import Table from "../../Table/index.jsx";
import { vulnerabilitiesColumnDef } from "../../Table/tableColumnDef.js";

function InternalNetworks(props) {
  // const getIssues = () => {
  //   const issues = props.companyInfo() ? props.companyInfo().issues : [];
  //   return issues;
  // };
  const [sortBy, setSortBy] = createSignal("");
  const [selectedNow, setSelectedNow] = createSignal(false);

  const getTopVulnerabilities = () => props.topVulnerabilities;
  console.log({ topVulnerabilities: getTopVulnerabilities() });

  return (
    <div class="card vulnerabilities">
      {/* <div class="header">
        <div class="title">
          <div class="icon">
            <FaSolidBug />
          </div>
          <span>Top priority vulnerabilities</span>
        </div>
        <div class="actions"></div>
      </div> */}
      {/* <div class="table">
        <div class="columns-name">
          <div class="date">published</div>
          <div class="username">author</div>
          <div class="vul-class">class</div>
          <div class="vul-risk">risk</div>
          <div class="vul-score">score</div>
          <div class="vul-title">issue title</div>
          <div class="vul-title">status</div>
        </div> */}

      {/* <Show when={!props.isLoading} fallback={() => <PageLoader />}>
          <div class="rows">
            <For each={props.topVulnerabilities}>
              {(issue) => (
                <>
                  <div
                    class="item"
                    onClick={() => {
                      history.push(
                        "/issues/" +
                          `${issue.id}_${issue.name}_${issue.risk_level}`
                      );
                    }}
                  >
                    <div class="date">{formatDate(issue.creacion)}</div>
                    <div class="username">
                      {issue.researcher_username
                        ? `@${issue.researcher_username}`
                        : "-"}
                    </div>
                    <div class="vul-class">{issue.resource_class}</div>
                    <div class="vul-risk">{issue.risk_level}</div>
                    <div class="vul-score flex no-border-bottom">
                      <span class="mt-2">{issue.risk_score}</span>

                      <span class="mr-1"></span>
                      <For
                        each={
                          issue.risk_score && !isNaN(parseInt(issue.risk_score))
                            ? new Array(parseInt(issue.risk_score))
                            : []
                        }
                      >
                        {() => (
                          <>
                            <span class="w-2 h-2 ml-0.5 mt-2 red-border rounded-full codefend-bg-red"></span>
                          </>
                        )}
                      </For>
                      <For
                        each={
                          issue.risk_score && !isNaN(parseInt(issue.risk_score))
                            ? new Array(5 - issue.risk_score)
                            : new Array(5)
                        }
                      >
                        {() => (
                          <>
                            <span class="w-2 h-2 ml-0.5 mt-2 codefend-border-red rounded-full"></span>
                          </>
                        )}
                      </For>
                    </div>
                    <div class="vul-title">{issue.name}</div>
                    <div class="vul-title">{issue.condicion}</div>
                  </div>
                </>
              )}
            </For>
          </div>
        </Show> */}

      <Show when={!props.isLoading} fallback={() => <PageLoader />}>
        <Table
          sortBy={sortBy}
          selectedNow={selectedNow}
          setSelectedNow={setSelectedNow}
          data={getTopVulnerabilities}
          columns={vulnerabilitiesColumnDef}
          fieldsToHideOnMobile={["name", "score", "creacion"]}
          // maxHeight="42%"
        >
          <div class="header">
            <div class="title">
              <div class="icon">
                <FaSolidBug />
              </div>
              <span>Top priority vulnerabilities</span>
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
              <option value="status">status</option>
            </select>
            <div class="actions"></div>
          </div>
        </Table>
      </Show>
      {/* </div> */}
      <Show when={!props.isLoading && props.topVulnerabilities.length === 0}>
        <EmptyCard />
      </Show>
    </div>
  );
}

export default InternalNetworks;
