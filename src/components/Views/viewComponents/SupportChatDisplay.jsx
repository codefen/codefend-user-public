import { For, createEffect, createResource } from "solid-js";
import { CustomerSupportServices } from "../../../Services/ApiHandlerV2";
import SupportMessageCard from "./SupportMessageCard";
import { PageLoader } from "../../../views/Loader";
import ChatBox from "./ChatBox";
import { FaSolidMessage } from "solid-icons/fa";

const getTicket = async (ticketId) => {
  console.log("called");
  try {
    const data = await CustomerSupportServices.getOne(ticketId);
    return data;
  } catch (error) {
    console.log({ error });
  }
};

const SupportChatDisplay = (props) => {
  const getSelectedTicketId = () => props.selectedTicket()?.id;

  const [ticket, { refetch }] = createResource(getSelectedTicketId, getTicket);

  const ticketInfoData = () => {
    const ticketData = ticket.loading ? {} : ticket().unico;
    return ticketData;
  };

  const selectedTicket = () =>
    props.selectedTicket() ?? {
      cs_header: "",
    };

  console.log({ selectedTicket: selectedTicket() });

  return (
    <div class="card messages">
      <div class="header">
        <div class="title">
          <div class="icon">
            <FaSolidMessage />
          </div>
          <span>{selectedTicket().cs_header}</span>
        </div>
      </div>
      <div class="content">
        <Show when={!ticket.loading} fallback={() => <PageLoader />}>
          <div
            class={`messages-wrapper ${
              ticketInfoData()?.childs?.length > 3 && "item"
            }`}
          >
            <SupportMessageCard {...selectedTicket()} />
            <For each={ticketInfoData().childs ?? []}>
              {(message) => (
                <>
                  <SupportMessageCard {...message} />
                </>
              )}
            </For>
          </div>
        </Show>
      </div>

      <ChatBox
        onDone={() => {
          refetch();
        }}
        selectedId={selectedTicket().id}
      />
    </div>
  );
};

export default SupportChatDisplay;
