//Core packages
import { createSignal, Show, createEffect } from "solid-js";
import history from "../../../history.jsx";
import {
  FaSolidChevronLeft,
  FaRegularFloppyDisk,
  FaSolidPencil,
} from "solid-icons/fa";
import { useParams } from "@solidjs/router";
import AppEditor from "../../AppEditor/index";
import toast from "solid-toast";
import { IssuesServices } from "../../../Services/ApiHandlerV2/issues.handler.js";
import { formatDate } from "../../../utils/helper.js";
import { PageLoader, PageLoaderOverlay } from "../../../views/Loader.jsx";
import { getTinyEditorContent } from "../../../editor/index.js";

function SourceCode(props) {
  const [isUpdatingIssue, setIsUpdatingIssue] = createSignal(false);
  const [isEditable, setIsEditable] = createSignal(false);
  const [issueNameUpdate, setIssueNameUpdate] = createSignal("");

  const handleKeyDown = (event) => {
    if (event.ctrlKey && (event.key === "s" || event.keyCode === 83)) {
      event.preventDefault();
      handleIssueUpdate();
    }
  };

  createEffect(() => {
    return () => {
      contentWindow.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const nameText = () => {
    if (!issueNameUpdate()) return props.issue.name;
    const isNameUpdated = issueNameUpdate() !== props.issue.name;
    if (isNameUpdated) return issueNameUpdate();
    return props.issue.name;
  };

  const handleIssueUpdate = () => {
    if (!isEditable()) return;
    const _editorContent = getTinyEditorContent("issue");
    if (!_editorContent) return;

    setIsUpdatingIssue(true);

    IssuesServices.modify({
      id: props.issue.id,
      main_desc: _editorContent,
      name: issueNameUpdate(),
      risk_score: props.issue.risk_score,
    })
      .then((data) => {
        setIsEditable(false);
        toast.success(data.message);
      })
      .finally(() => {
        setIsUpdatingIssue(false);
        contentWindow.removeEventListener("keydown", handleKeyDown);
      });
  };
  // console.log({ issue: props.issue });

  const handleIsEditable = () => {
    const iframe = document.getElementById("issue_ifr");
    if (!iframe) return;
    const contentWindow = iframe.contentWindow;
    contentWindow.addEventListener("keydown", handleKeyDown);

    isEditable() ? setIsEditable(false) : setIsEditable(true);
  };

  return (
    <>
      <Show when={!props.isLoading} fallback={() => <PageLoader />}>
        <div class="header">
          <div
            class="back"
            onClick={() => {
              history.push("/issues");
            }}
          >
            <FaSolidChevronLeft />
          </div>
          {isEditable() ? (
            <input
              class="w-[80%]"
              value={issueNameUpdate() ? issueNameUpdate() : props.issue.name}
              onChange={(e) => setIssueNameUpdate(e.target.value)}
            />
          ) : (
            <div class="name">{nameText()}</div>
          )}
          <div
            class={`edit + ${isEditable() ? "on" : "off"}`}
            onClick={() => handleIsEditable()}
          >
            <FaSolidPencil />
          </div>
          <div
            onClick={() => {
              handleIssueUpdate();
            }}
            class={`save + ${isEditable() ? "on" : "off"}`}
          >
            <FaRegularFloppyDisk />
          </div>
        </div>

        <div class="info">
          <div>
            Id: <span>{props.issue.id}</span>
          </div>
          <div>
            Class: <span>{props.issue.resource_class}</span>
          </div>
          <div>
            Resource id: <span>{props.issue.resource_id}</span>
          </div>
          <div>
            Published: <span>{formatDate(props.issue.creacion)}</span>
          </div>
          <div>
            Author: <span>{props.issue.researcher_username}</span>
          </div>
          <div>
            Risk score: <span>{props.issue.risk_score}</span>
          </div>
          <div>
            status: <span>{props.issue.condicion}</span>
          </div>
        </div>
        <div>
          <AppEditor
            isEditable={isEditable}
            initialValue={props.issue?.issue ?? ""}
            isUpdatingIssue={isUpdatingIssue}
          />
        </div>
        {isUpdatingIssue() && <PageLoaderOverlay />}
      </Show>
    </>
  );
}

export default SourceCode;
