//Core packages
import { Show, For, createSignal } from "solid-js";
import createModal from "../../../Store/modal.jsx";
import AddVulnerabilityModal from "../modalComponents/addVulnerabilityModal.jsx";
import DeleteVulnerabilityModal from "../modalComponents/deleteVulnerabilityModal.jsx";
import history from "../../../history.jsx";
import { PageLoader } from "../../../views/Loader.jsx";
import { formatDate } from "../../../utils/helper.js";
import ModalWrapper from "../modalComponents/ModalWrapper.jsx";
import { FaSolidBug, FaSolidTrash } from "solid-icons/fa";
import EmptyCard from "./EmptyCard.jsx";

function IssuesPanelMobileAndCloud(props) {
  const { showModal, setShowModal, setShowModalStr, showModalStr } =
    createModal;
  const [selectedId, setSelectedId] = createSignal(0);

  const formatIssues = () => {
    if (props.issues.constructor !== Array) {
      return [props.issues];
    }
    return props.issues;
  };

  return (
    <>
      <div class="header">
        <div class="title">
          <div class="icon">
            <FaSolidBug />
          </div>
          <span>resource related vulnerabilities & records</span>
        </div>
        <div class="actions"></div>
      </div>

      <div class="columns-name">
        <div class="date codefend-text-red underline ">published</div>
        <div class="username">author</div>
        <div class="vul-class">class</div>
        <div class="vul-risk">risk</div>
        <div class="vul-score">score</div>
        <div class="vul-title">issue title</div>
      </div>

      <Show when={!props.isLoading} fallback={() => <PageLoader />}>
        <div class="rows">
          <For each={formatIssues()}>
            {(vulnerability) => (
              <>
                <div
                  class="item"
                  onClick={(e) => {
                    history.push(
                      "/issues/" +
                        `${vulnerability.id}_${vulnerability.name}_${vulnerability.risk_level}`
                    );
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <div class="date">{formatDate(vulnerability.creacion)}</div>

                  <div class="username">
                    {vulnerability.researcher_username}
                  </div>
                  <div class="vul-class">{vulnerability.resource_class}</div>

                  <div class="vul-risk">{vulnerability.risk_level}</div>
                  <div class="vul-score flex no-border-bottom">
                    <span class="mt-2">{vulnerability.risk_score}</span>

                    <span class="mr-1"></span>
                    <For
                      each={
                        vulnerability.risk_score &&
                        !isNaN(parseInt(vulnerability.risk_score))
                          ? new Array(parseInt(vulnerability.risk_score))
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
                        vulnerability.risk_score &&
                        !isNaN(parseInt(vulnerability.risk_score))
                          ? new Array(5 - vulnerability.risk_score)
                          : new Array(5)
                      }
                    >
                      {() => (
                        <>
                          <span class="w-2 h-2 ml-0.5 mt-2  codefend-border-red rounded-full">
                            {" "}
                          </span>
                        </>
                      )}
                    </For>
                  </div>
                  <div class="vul-title">{vulnerability.name}</div>
                  {/* <div
                    class=""
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      return false;
                    }}
                  >
                    <div
                      class="cursor-pointer p-3 flex"
                      onClick={() => {
                        setSelectedId(vulnerability.id);
                        setShowModal(!showModal());
                        setShowModalStr("delete_issue");
                      }}
                    >
                      <FaSolidTrash />
                    </div>
                  </div> */}
                </div>
              </>
            )}
          </For>
        </div>
      </Show>
      <Show when={!props.isLoading && formatIssues().length === 0}>
        <EmptyCard />
      </Show>
    </>
  );
}

export default IssuesPanelMobileAndCloud;
