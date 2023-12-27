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
import { HiOutlineBars3BottomLeft } from "solid-icons/hi";
import CreateIssueModal from "../../Views/modalComponents/CreateIssueModal.jsx";

function SourceCode(props) {
  const { showModal, setShowModal, setShowModalStr, showModalStr } =
    createModal;
  const [selectedId, setSelectedId] = createSignal(0);
  return (
    <>
      <Show when={showModal() && showModalStr() === "add_issue"}>
        {/* <ModalWrapper>
          <div class="w-full w-96 internal-tables disable-border">
            <div class="modal-header">
                <HiOutlineBars3BottomLeft class="text-lg mr-2 text-fend-red"/>
                <span class="text-sm">Add issue</span>
            </div>
            <AddVulnerabilityModal
              onDone={() => {
                props.refetchIssues();
              }}
            />
            <div class="container flex items-center justify-center  mx-auto p-3 text-format"></div>
          </div>
        </ModalWrapper> */}
        <div class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-20 z-20 py-10">
          <CreateIssueModal
            closeModal={() => {
              setShowModal(!showModal());
              setShowModalStr("");
            }}
          />
        </div>
      </Show>
      <Show when={showModal() && showModalStr() === "delete_issue"}>
        <ModalWrapper>
          <div class="w-full w-96 internal-tables disable-border">
            <div class="modal-header">
              <HiOutlineBars3BottomLeft class="text-lg mr-2 text-fend-red" />
              <span class="text-sm">Delete issue</span>
            </div>
            <DeleteVulnerabilityModal
              id={selectedId()}
              onDone={() => {
                props.refetchIssues();
              }}
            />
            <div class="container flex items-center justify-center  mx-auto p-3 text-format"></div>
          </div>
        </ModalWrapper>
      </Show>
      <div class="card table flex-grow">
        <div class="header">
          <div class="title">
            <div class="icon">
              <FaSolidBug />
            </div>
            <span>Issues</span>
          </div>
          <div class="actions">
            <div
              onClick={() => {
                setShowModal(!showModal());
                setShowModalStr("add_issue");
              }}
              class=""
            >
              Add finding
            </div>
          </div>
        </div>

        <div class="columns-name">
          <div class="date">published</div>
          <div class="username">author</div>
          <div class="vul-class">class</div>
          <div class="vul-risk">risk</div>
          <div class="vul-score">score</div>
          <div class="vul-title">issue title</div>
          <div class="vul-title">status</div>
          <div class="date">actions</div>
        </div>

        <Show when={!props.isLoading} fallback={() => <PageLoader />}>
          <div class="rows">
            <For each={props.issues}>
              {(issue) => (
                <>
                  {/* {console.log(issue)} */}
                  <div
                    class="item"
                    onClick={(e) => {
                      history.push(`/issues/${issue.id}`);
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    <div class="date">{formatDate(issue.creacion)}</div>

                    <div class="username">{issue.researcher_username}</div>
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
                    <div
                      class="date"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        return false;
                      }}
                    >
                      <div
                        class="cursor-pointer p-3 flex"
                        onClick={() => {
                          setSelectedId(issue.id);
                          setShowModal(!showModal());
                          setShowModalStr("delete_issue");
                        }}
                      >
                        <FaSolidTrash />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </For>
          </div>
        </Show>
      </div>
      <Show when={!props.isLoading && props.issues.length === 0}>
        <EmptyCard />
      </Show>
    </>
  );
}

export default SourceCode;
