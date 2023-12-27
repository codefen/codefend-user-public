//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import createModal from "../../../Store/modal.jsx";
import ModalWrapper from "../modalComponents/ModalWrapper.jsx";
import { PageLoader } from "../../../views/Loader.jsx";
import { FaSolidServer } from "solid-icons/fa";
import EmptyCard from "./EmptyCard.jsx";
import { FaSolidTrash } from "solid-icons/fa";
import DeleteWebResourceModal from "../modalComponents/deleteWebResourceModal.jsx";
import { EndpointServices } from "../../../Services/ApiHandlerV2/endpoints.handler.js";
import toast from "solid-toast";
import history from "../../../history.jsx";
import { HiOutlineBars3BottomLeft } from "solid-icons/hi";

function InternalNetworks(props) {
  const { showModal, setShowModal, setShowModalStr, showModalStr } =
    createModal;
  const [selectedLanIdToDelete, setSelectedLanIdToDelete] = createSignal(null);
  const [isDeletingLan, setIsDeletingLan] = createSignal(false);

  const handleDelete = () => {
    setIsDeletingLan(true);
    console.log(selectedLanIdToDelete())
    let enpId = selectedLanIdToDelete()
    EndpointServices.delete(enpId)
      .then(() => {
        history.push(0);
        setShowModal(!showModal());
        toast.success("Successfully Deleted enp...");
      })
      .finally(() => {
        setIsDeletingLan(false);
      });
  };

  console.log(props.endpoints)

  return (
    <>
      <Show when={showModal() && showModalStr() === "delete_resource"}>
        <ModalWrapper>
          <div class="w-full w-96 internal-tables disable-border">
            <div class="modal-header">
              <HiOutlineBars3BottomLeft class="text-lg mr-2 text-fend-red" />
              <span class="text-sm">Delete Endpoint</span>
            </div>
            <DeleteWebResourceModal
              isDeleting={isDeletingLan()}
              onDelete={handleDelete}
              id={selectedLanIdToDelete()}
              onDone={() => {
                history.push(0);
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
              <FaSolidServer />
            </div>
            <span>Endpoints</span>
          </div>
        </div>

        <div class="columns-name">
          <div class="id">id</div>
          <div class="hostname">name</div>
          <div class="ip">vendor</div>
          <div class="os">version</div>
          <div class="ip">type</div>
          <div class="id">actions</div>
        </div>

        <Show when={!props.isLoading} fallback={() => <PageLoader />}>
          <div class="rows">
            <For each={props.endpoints[0].apps}>
              {(endpoint) => (
                <>
                  <div class="item left-marked">
                    <div class="id">{endpoint.id}</div>
                    <div class="hostname">{endpoint.Name}</div>
                    <div class="ip">{endpoint.Vendor}</div>
                    <div class="os">
                      {endpoint.Version}
                    </div>
                    <div class="ip">{endpoint.Type}</div>
                    <div
                      class="id cursor-pointer p-3 flex"
                      onClick={() => {
                        setSelectedLanIdToDelete(endpoint?.id);
                        setShowModal(!showModal());
                        setShowModalStr("delete_resource");
                      }}
                    >
                      <FaSolidTrash />
                    </div>
                  </div>
                </>
              )}
            </For>
          </div>
        </Show>
      </div>
      <Show when={!props.isLoading && props.endpoints[0].apps.length === 0}>
        <EmptyCard />
      </Show>
    </>
  );
}

export default InternalNetworks;
