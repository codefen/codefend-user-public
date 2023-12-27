//Core packages
import {
  createSignal,
  createEffect,
  Show,
  For,
  createResource,
} from "solid-js";

//Components
import IssuesDetailsPanel from "./viewComponents/issuesDetailsPanel.jsx";
import IssueChatDisplay from "./viewComponents/IssueChatDisplay.jsx";
import { IssuesServices } from "../../Services/ApiHandlerV2/issues.handler.js";
import { useParams } from "@solidjs/router";

const getIssue = async (id) => {
  // const params = convertToIssueParams(id);
  // console.log({ id });
  if (!id) return;
  try {
    const data = await IssuesServices.getOne(id);
    return data;
  } catch (error) {
    console.log({ error });
  }
};

function MainView() {
  const [showScreen, setShowScreen] = createSignal(false);
  const { id } = useParams();
  const [issueInfo, { refetch }] = createResource(id, getIssue);

  const issue = () => {
    const _issue = issueInfo.loading ? {} : issueInfo()?.issue;
    return _issue ?? {};
  };

  createEffect(() => {
    setTimeout(() => {
      setShowScreen(true);
    }, 50);
  });

  return (
    <>
      <main class={`issue-detail ${showScreen() ? "actived" : ""}`}>
        <section class="issue">
          {/* <div class="pb-[20px] title title-format ">
            Vulnerabilities & findings
          </div> */}
          <IssuesDetailsPanel issue={issue()} isLoading={issueInfo.loading} />
        </section>

        <section class="grow h-full">
          <IssueChatDisplay
            selectedIssue={issue()}
            isLoading={issueInfo.loading}
            refetch={refetch}
          />
        </section>
      </main>
    </>
  );
}

export default MainView;
