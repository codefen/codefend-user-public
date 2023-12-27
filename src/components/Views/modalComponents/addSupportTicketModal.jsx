//Core packages
import { createEffect, createSignal, onCleanup } from "solid-js";
import { FaSolidGlobe } from "solid-icons/fa";
import { ImPencil } from "solid-icons/im";
import createModal from "../../../Store/modal.jsx";
import toast from "solid-toast";
import ButtonLoader from "../../ButtonLoader/buttonLoader.jsx";
import { CustomerSupportServices } from "../../../Services/ApiHandlerV2/customerSupport.handler.js";

function SupportTicketModal(props) {
  const { showModal, setShowModal } = createModal;
  const [title, setTitle] = createSignal("");
  const [shortDescription, setShortDescription] = createSignal("");
  const [isAddingTicket, setIsAddingTicket] = createSignal(false);
  let textAreaRef;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAddingTicket(true);

    const requestParams = {
      condicion: "open",
      cs_header: title(),
      cs_body: shortDescription(),
    };

    CustomerSupportServices.add(requestParams)
      .then(() => {
        props.onDone();
        setShowModal(!showModal());
        toast.success("Successfully Added Ticket...");
      })
      .finally(() => {
        setIsAddingTicket(false);
      });
  };

  createEffect(() => {
    if (!textAreaRef) return;

    const handleEnter = (e) => {
      if (!Boolean(e.target.value.trim())) return;
      if (e.key === "Enter") {
        e.preventDefault();
        if (!title()) return;

        setIsAddingTicket(true);
        const requestParams = {
          condicion: "open",
          cs_header: title(),
          cs_body: e.target.value.trim(),
        };

        CustomerSupportServices.add(requestParams)
          .then(() => {
            e.target.value = "";
            props.onDone();
            setShowModal(!showModal());
            toast.success("Successfully Added Ticket...");
          })
          .finally(() => {
            setIsAddingTicket(false);
          });
      }
    };

    textAreaRef.addEventListener("keypress", handleEnter);

    onCleanup(() => {
      textAreaRef.removeEventListener("keypress", handleEnter);
    });
  }, []);

  return (
    <>
      <div class="container flex items-center justify-center  mx-auto p-3 text-format">
        <form onSubmit={handleSubmit} class="p-6">
          <div class="relative flex items-center w-96">
            <span class="absolute">
              <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red" />
            </span>

            <input
              type="text"
              name="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300"
              placeholder="title"
              required
            />
          </div>

          <div class="relative flex  w-96 mt-4">
            <span class="absolute py-4">
              <ImPencil class="w-3 h-3 mx-4 codefend-text-red" />
            </span>

            <textarea
              ref={textAreaRef}
              onChange={(e) => {
                setShortDescription(e.target.value);
              }}
              placeholder="short description"
              class="block w-full py-3 bg-white  px-11   focus:outline-none dark:text-gray-300 resize-none h-28  log-inputs text-area "
              required
            ></textarea>
          </div>

          <div class="mt-6 flex">
            <button
              type="button"
              disabled={isAddingTicket()}
              onClick={() => {
                setShowModal(!showModal());
              }}
              class="log-inputs text-gray focus:outline-none w-2/6 px-4 mr-2 py-3 text-sm tracking-wide text-white transition-colors duration-300 codefend_secondary_ac"
            >
              cancel
            </button>
            <button
              type="submit"
              disabled={isAddingTicket()}
              class="log-inputs flex flex-row items-center gap-x-2 text-white focus:outline-none bg-codefend px-6 w-4/6 py-3 text-sm tracking-wide text-white transition-colors duration-300 codefend_main_ac"
            >
              {isAddingTicket() && <ButtonLoader />}
              add ticket
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SupportTicketModal;
