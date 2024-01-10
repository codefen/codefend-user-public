import { createEffect, createSignal } from "solid-js";
import IssueCreationPanel from "../viewComponents/issueCreationPanel";
import IssueCreationChatDisplay from "../viewComponents/IssueCreationChatDisplay";

const CreateIssueModal = (props) => {
  const [showScreen, setShowScreen] = createSignal(false);

  createEffect(() => {
    setTimeout(() => {
      setShowScreen(true);
    }, 50);
  });

  return (
    // <div class="w-screen h-screen  bg-black bg-opacity-20 flex items-center justify-center z-20 ">

    <main class={`issue-detail w-full ${showScreen() ? "actived" : ""}`}>
      <section class="issue">
        {/* <div class="pb-[20px] title title-format ">
            Vulnerabilities & findings
          </div> */}
        <IssueCreationPanel
          issue={[]}
          isLoading={false}
          goBack={() => {
            props.closeModal();
          }}
        />
      </section>

      <section class="grow h-full">
        <IssueCreationChatDisplay
          selectedIssue={{}}
          isLoading={false}
          refetch={() => {}}
        />
      </section>
    </main>
    // </div>
  );
};

export default CreateIssueModal;
