//Core packages
import { createSignal, Show, createEffect, onMount, onCleanup } from "solid-js";
import history from "../../../history.jsx";
import { FaSolidChevronLeft, FaRegularFloppyDisk } from "solid-icons/fa";
import { useParams } from "@solidjs/router";
import AppEditor from "../../AppEditor/index";
import toast from "solid-toast";
import { IssuesServices } from "../../../Services/ApiHandlerV2/issues.handler.js";
import { formatDate } from "../../../utils/helper.js";
import { PageLoader, PageLoaderOverlay } from "../../../views/Loader.jsx";
import { getTinyEditorContent } from "../../../editor/index.js";
import createUser from "../../../Store/user.jsx";
import createModal from "../../../Store/modal.jsx";

function SourceCode(props) {
  // const [isEditable, setIsEditable] = createSignal(false);
  const [issueName, setIssueName] = createSignal("");
  const [score, setScore] = createSignal("");
  const [issueClass, setIssueClass] = createSignal("");
  const [isAddingIssue, setIsAddingIssue] = createSignal(false);
  const { setShowModal, showModal } = createModal;

  const { user } = createUser;

  const handleKeyDown = (event) => {
    if (event.ctrlKey && (event.key === "s" || event.keyCode === 83)) {
      event.preventDefault();
      handleIssueUpdate();
    }
  };

  const handleIssueUpdate = async (e) => {
    // e.preventDefault();
    const _editorContent = getTinyEditorContent("issue");
    if (!_editorContent) {
      toast.error("Invalid content, please add content using the editor");
      return;
    }

    if (!score()) {
      toast.error("Invalid score");
      return;
    }

    if (!issueName() || issueName().length == 0 || issueName().length > 100) {
      toast.error("Invalid name");
      return;
    }

    if (
      ![
        "web",
        "mobile",
        "cloud",
        "lan",
        "source",
        "social",
        "research",
      ].includes(issueClass())
    ) {
      toast.error("Invalid issue type");
      return;
    }

    setIsAddingIssue(true);

    const requestParams = {
      risk_score: score(),
      name: issueName(),
      resource_class: issueClass(),
      researcher_username: user().username,
      main_desc: _editorContent,
    };

    console.log({ requestParams });

    try {
      const data = await IssuesServices.add(requestParams);
      const newIssueId = data?.new_issue?.id ?? "";
      props.onDone ? props.onDone() : history.push(0);
      setShowModal(!showModal());
      toast.success("Successfully Added Issue...");
      if (newIssueId) {
        history.push(`issues/${newIssueId}`);
      }
    } catch (error) {
    } finally {
      setIsAddingIssue(false);
    }
  };

  // createEffect(() => {
  //   return () => {
  //     contentWindow.removeEventListener("keydown", handleKeyDown);
  //   };

  // }, []);

  // const nameText = () => {
  //   if (!issueNameUpdate()) return props.issue.name;
  //   const isNameUpdated = issueNameUpdate() !== props.issue.name;
  //   if (isNameUpdated) return issueNameUpdate();
  //   return props.issue.name;
  // };

  // const handleIssueUpdate = () => {
  //   if (!isEditable()) return;
  //   const _editorContent = getTinyEditorContent("issue");
  //   if (!_editorContent) return;

  //   setIsUpdatingIssue(true);

  //   IssuesServices.modify({
  //     id: props.issue.id,
  //     main_desc: _editorContent,
  //     name: issueNameUpdate(),
  //     risk_score: props.issue.risk_score,
  //   })
  //     .then((data) => {
  //       setIsEditable(false);
  //       toast.success(data.message);
  //     })
  //     .finally(() => {
  //       setIsUpdatingIssue(false);
  //       // contentWindow.removeEventListener("keydown", handleKeyDown);
  //     });
  // };
  console.log({ issue: props.issue });

  const handleIsEditable = () => {
    const iframe = document.getElementById("issue_ifr");
    if (!iframe) return;
    const contentWindow = iframe.contentWindow;
    contentWindow.addEventListener("keydown", handleKeyDown);

    isEditable() ? setIsEditable(false) : setIsEditable(true);
  };

  createEffect(() => {
    const iframe = document.getElementById("issue_ifr");
    if (!iframe) return;
    const contentWindow = iframe.contentWindow;
    contentWindow.addEventListener("keydown", handleKeyDown);

    onCleanup(() => {
      contentWindow.removeEventListener("keydown", handleKeyDown);
    });
  }, []);

  return (
    <>
      <Show when={!props.isLoading} fallback={() => <PageLoader />}>
        <div class="header">
          <div
            class="back"
            onClick={() => {
              props.goBack?.();
            }}
          >
            <FaSolidChevronLeft />
          </div>

          <input
            class="w-[90%] h-full"
            placeholder="Add Issue title here..."
            value={issueName()}
            onChange={(e) => setIssueName(e.target.value)}
          />

          <div
            onClick={() => {
              handleIssueUpdate();
            }}
            // class={`save + ${isEditable() ? "on" : "off"}`}
            class={`save on`}
          >
            <FaRegularFloppyDisk />
          </div>
        </div>

        <div class="info">
          <div class="flex items-center">
            <p>Class:</p>
            <select
              onChange={(e) => {
                setIssueClass(e.target.value);
              }}
              class="  py-3 bg-white focus:outline-none"
              required
            >
              <option value="" disabled selected>
                Select Class
              </option>
              <option value="web">web</option>
              <option value="mobile">mobile</option>
              <option value="cloud">cloud</option>
              <option value="lan">internal network</option>
              <option value="source">source code</option>
              <option value="social">social & osint</option>
              <option value="research">research</option>
            </select>
          </div>

          <div class="flex items-center">
            <p>Risk score:</p>
            <select
              onChange={(e) => {
                setScore(e.target.value);
              }}
              class=" py-3 bg-whitefocus:outline-none "
              required
            >
              <option value="" disabled selected>
                Select Score
              </option>
              <option value="5">critical</option>
              <option value="4">elevated</option>
              <option value="3">medium</option>
              <option value="2">low</option>
              <option value="1">intel</option>
            </select>
          </div>
        </div>
        <div>
          <AppEditor
            isEditable={() => true}
            initialValue={props.issue?.issue ?? ""}
            isUpdatingIssue={isAddingIssue}
            isIssueCreation
          />
        </div>
        {isAddingIssue() && <PageLoaderOverlay />}
      </Show>
    </>
  );
}

export default SourceCode;
