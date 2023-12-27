//Core packages

//Components
import { createSignal, createEffect, createResource, onMount } from "solid-js";
import SupportTicketList from "./viewComponents/SupportTicketList";
import SupportChatDisplay from "./viewComponents/SupportChatDisplay";
import { CustomerSupportServices } from "../../Services/ApiHandlerV2";

const getTickets = async () => {
  try {
    const data = await CustomerSupportServices.getAll();
    return data;
  } catch (error) {
    console.log({ error });
  }
};

function MainView() {
  const [supportTickets, { refetch }] = createResource(getTickets);

  const [selectedTicket, setSelectedTicket] = createSignal(null);
  const [showScreen, setShowScreen] = createSignal(false);

  const supportTicketsData = () => {
    const ticketsData = supportTickets.loading
      ? []
      : supportTickets()?.disponibles;
    return ticketsData ?? [];
  };

  createEffect(() => {
    setTimeout(() => {
      setShowScreen(true);
    }, 50);
  });

  createEffect(() => {
    if (selectedTicket() === null) {
      const _ticketsData = supportTicketsData();
      if (!supportTickets.loading && Boolean(_ticketsData.length)) {
        setSelectedTicket(_ticketsData[0]);
      }
    }
  }, [selectedTicket]);

  return (
    <>
      <main class={`support ${showScreen() ? "actived" : ""}`}>
        <section class="left">
          <SupportTicketList
            setSelectedTicket={setSelectedTicket}
            selectedTicket={selectedTicket}
            isLoading={supportTickets.loading}
            tickets={supportTicketsData()}
            refetchTickets={refetch}
          />
        </section>
        <section class="right">
          {selectedTicket() && (
            <SupportChatDisplay selectedTicket={selectedTicket} />
          )}
        </section>
      </main>
    </>
  );
}

export default MainView;
