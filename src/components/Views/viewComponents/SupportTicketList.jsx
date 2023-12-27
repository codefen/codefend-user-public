//Core packages
import { Show, For, createSignal } from "solid-js";
import "/src/flags.css";
import AddTicketModal from "../modalComponents/addSupportTicketModal";
import createModal from "../../../Store/modal.jsx";
import { PageLoader } from "../../../views/Loader";
import { defaultSupportTicket } from "../../../constantData";
import { formatDate } from "../../../utils/helper";
import ModalWrapper from "../modalComponents/ModalWrapper";
import { FaSolidMessage } from "solid-icons/fa";
import EmptyCard from "./EmptyCard.jsx";
import { FaSolidTrash } from "solid-icons/fa";
import DeleteWebResourceModal from "../modalComponents/deleteWebResourceModal.jsx";
import { CustomerSupportServices } from "../../../Services/ApiHandlerV2/customerSupport.handler.js";
import toast from "solid-toast";
import history from "../../../history.jsx";
import { HiOutlineBars3BottomLeft } from "solid-icons/hi";

function SupportTicketList(props) {
  const { showModal, setShowModal, setShowModalStr, showModalStr } =
    createModal;

  const [selectedTicketIdToDelete, setSelectedTicketIdToDelete] =
    createSignal(null);
  const [isDeletingTicket, setIsDeletingTicket] = createSignal(false);

  const handleTicketSelection = (ticket) => {
    if (props.selectedTicket()?.id === ticket.id) return;
    props.setSelectedTicket(ticket);
  };

  const handleDelete = () => {
    setIsDeletingTicket(true);
    CustomerSupportServices.delete(selectedTicketIdToDelete())
      .then(() => {
        history.push(0);
        setShowModal(!showModal());
        toast.success("Successfully Deleted Ticket...");
      })
      .finally(() => {
        setIsDeletingTicket(false);
      });
  };

  return (
    <>
      <Show when={showModal() && showModalStr() === "add_mobile_app"}>
        <ModalWrapper>
          <div class="w-full w-96 internal-tables disable-border">
            <div class="modal-header">
                <HiOutlineBars3BottomLeft class="text-lg mr-2 text-fend-red"/>
                <span class="text-sm">Add ticket</span>
            </div>
            <AddTicketModal
              onDone={() => {
                props.refetchTickets();
              }}
            />
            <div class="container flex items-center justify-center  mx-auto p-3 text-format"></div>
          </div>
        </ModalWrapper>
      </Show>

      <Show when={showModal() && showModalStr() === "delete_resource"}>
        <ModalWrapper>
          <div class="w-full w-96 internal-tables disable-border">
            <div class="modal-header">
                <HiOutlineBars3BottomLeft class="text-lg mr-2 text-fend-red"/>
                <span class="text-sm">Delete ticket</span>
            </div>
            <DeleteWebResourceModal
              isDeleting={isDeletingTicket()}
              onDelete={handleDelete}
              id={selectedTicketIdToDelete()}
              onDone={() => {
                history.push(0);
              }}
            />
            <div class="container flex items-center justify-center  mx-auto p-3 text-format"></div>
          </div>
        </ModalWrapper>
      </Show>

      <div class="card table">
        <div class="header">
          <div class="title">
            <div class="icon">
              <FaSolidMessage />
            </div>
            <span>Support Tickets</span>
          </div>
          <div class="actions">
            <div
              onClick={() => {
                setShowModal(!showModal());
                setShowModalStr("add_mobile_app");
              }}
            >
              Add Entry
            </div>
          </div>
        </div>

        <div class="columns-name">
          <div class="username">author</div>
          <div class="date">published</div>
          <div class="vul-title">title</div>
          <div class="status">status</div>
          <div class="id">actions</div>
        </div>

        <Show when={!props.isLoading} fallback={() => <PageLoader />}>
          <div class="rows">
            <For each={props.tickets.reverse()}>
              {(ticket) => {
                const isSelected = () =>
                  props.selectedTicket()?.id === ticket?.id;

                return (
                  <>
                    <div
                      onClick={() => handleTicketSelection(ticket)}
                      class={`item ${isSelected() && "left-marked"} `}
                    >
                      <div class="username">@{ticket.user_username}</div>
                      <div class="date">{formatDate(ticket.creacion)}</div>
                      <div class="vul-title">{ticket.cs_header}</div>
                      <div
                        class={`status ${
                          ticket.condicion === "open" && "codefend-text-red"
                        }`}
                      >
                        {ticket.condicion}
                      </div>
                      <div
                        class=" id cursor-pointer p-3 flex"
                        onClick={() => {
                          setSelectedTicketIdToDelete(ticket?.id);
                          setShowModal(!showModal());
                          setShowModalStr("delete_resource");
                        }}
                      >
                        <FaSolidTrash />
                      </div>
                    </div>
                  </>
                );
              }}
            </For>
          </div>
        </Show>
      </div>
      <Show when={!props.isLoading && props.tickets.length === 0}>
        <EmptyCard />
      </Show>
    </>
  );
}

export default SupportTicketList;
