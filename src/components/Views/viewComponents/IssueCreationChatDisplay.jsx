import { For, createEffect, createResource } from "solid-js";
import SupportMessageCard from "./SupportMessageCard";
import { PageLoader } from "../../../views/Loader";
import ChatBox from "./ChatBox";
import { FaSolidMessage } from "solid-icons/fa";

const IssueCreationChatDisplay = (props) => {
  //   const ticketInfoData = () => {
  //     const ticketData = ticket.loading ? {} : ticket().unico;
  //     return ticketData;
  //   };

  const selectedIssue = () => {
    // console.log({ selectedIssue: props.selectedIssue });
    return props.selectedIssue;
  };

  const handleChatSupport = () => {};

  return (
    <div class="card messages opacity-70 z-10 pointer-events-none animate-pulse">
      <div class="header">
        <div class="title">
          <div class="icon">
            <FaSolidMessage />
          </div>
          <span>customer support</span>
        </div>
      </div>
      <div class="content">
        <Show when={!props.isLoading} fallback={() => <PageLoader />}>
          <div
            class={`messages-wrapper ${
              selectedIssue()?.cs?.length > 3 && "item"
            }`}
          >
            {/* <SupportMessageCard {...selectedTicket()} /> */}
            <For each={selectedIssue()?.cs ?? []}>
              {(message) => (
                <>
                  <SupportMessageCard
                    cs_body={message.issue_cs_body}
                    {...message}
                  />
                </>
              )}
            </For>
          </div>
        </Show>
      </div>

      <ChatBox
        type="issue"
        onDone={() => {
          props.refetch();
        }}
        selectedId={selectedIssue().id}
      />
    </div>
  );
};

export default IssueCreationChatDisplay;
