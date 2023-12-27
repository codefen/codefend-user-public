//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import createModal from "../../../Store/modal.jsx";
import createUser from "../../../Store/user.jsx";
import AddAccessPointModal from "../modalComponents/addAccessPointModal.jsx";
import AddNetworkDeviceModal from "../modalComponents/addNetworkDeviceModal.jsx";
import createInternalNetwork from "../../../Store/internalNetworks.jsx";
import ApiHandler from "../../../Services/apiHandler.jsx";
import ModalWrapper from "../modalComponents/ModalWrapper.jsx";
import { PageLoader } from "../../../views/Loader.jsx";
import { FaSolidServer } from "solid-icons/fa";
import EmptyCard from "./EmptyCard.jsx";
import { FaSolidTrash } from "solid-icons/fa";
import DeleteWebResourceModal from "../modalComponents/deleteWebResourceModal.jsx";
import { InternalNetworkServices } from "../../../Services/ApiHandlerV2/internalNetwork.handler.js";
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
    InternalNetworkServices.delete(selectedLanIdToDelete())
      .then(() => {
        history.push(0);
        setShowModal(!showModal());
        toast.success("Successfully Deleted lan...");
      })
      .finally(() => {
        setIsDeletingLan(false);
      });
  };

  return (
    <>
      <Show when={showModal() && showModalStr() === "delete_resource"}>
        <ModalWrapper>
          <div class="w-full w-96 internal-tables disable-border">
            <div class="modal-header">
              <HiOutlineBars3BottomLeft class="text-lg mr-2 text-fend-red" />
              <span class="text-sm">Delete LAN</span>
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
      <Show when={showModal() && showModalStr() === "add_access_point"}>
        <ModalWrapper>
          <div class="w-full w-96 internal-tables disable-border">
            <div class="modal-header">
              <HiOutlineBars3BottomLeft class="text-lg mr-2 text-fend-red" />
              <span class="text-sm">Add access point</span>
            </div>
            <AddAccessPointModal
              onDone={() => {
                props.refetchInternalNetwork();
              }}
            />
            <div class="container flex items-center justify-center  mx-auto p-3 text-format"></div>
          </div>
        </ModalWrapper>
      </Show>
      <Show when={showModal() && showModalStr() === "add_network_device"}>
        <ModalWrapper>
          <div class="w-full w-96 internal-tables disable-border">
            <div class="modal-header">
              <HiOutlineBars3BottomLeft class="text-lg mr-2 text-fend-red" />
              <span class="text-sm">Add netowrk device</span>
            </div>
            <AddNetworkDeviceModal
              internalNetwork={props.internalNetwork ?? []}
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
            <span>Internal network structure</span>
          </div>
          <div class="actions">
            <div
              onClick={() => {
                setShowModal(!showModal());
                setShowModalStr("add_access_point");
              }}
            >
              Add access point
            </div>
            <div
              onClick={() => {
                setShowModal(!showModal());
                setShowModalStr("add_network_device");
              }}
            >
              Add network device
            </div>
          </div>
        </div>

        <div class="columns-name">
          <div class="id">id</div>
          <div class="ip">internal IP</div>
          <div class="ip">external IP</div>
          <div class="os">os / vendor</div>
          <div class="hostname">hostname</div>
          <div class="id">actions</div>
        </div>

        <Show when={!props.isLoading} fallback={() => <PageLoader />}>
          <div class="rows">
            <For each={props.internalNetwork}>
              {(network) => (
                <>
                  <div class="item left-marked">
                    <div class="id">{network.id}</div>
                    <div class="ip">{network.device_in_address}</div>
                    <div class="ip">{network.device_ex_address}</div>
                    <div class="os">
                      {network.device_os}/{network.device_vendor}
                    </div>
                    <div class="hostname">{network.device_name}</div>
                    <div
                      class="id cursor-pointer p-3 flex"
                      onClick={() => {
                        setSelectedLanIdToDelete(network?.id);
                        setShowModal(!showModal());
                        setShowModalStr("delete_resource");
                      }}
                    >
                      <FaSolidTrash />
                    </div>
                  </div>
                  <For each={network.childs}>
                    {(subNetwork) => (
                      <div class="item">
                        <div class="id">{subNetwork.id}</div>
                        <div class="ip lined">
                          <span class="sub-domain-icon-v"></span>
                          <span class="sub-domain-icon-h"></span>
                          {subNetwork.device_in_address}
                        </div>
                        <div class="ip">{subNetwork.device_ex_address}</div>
                        <div class="os">
                          {subNetwork.device_os}/{subNetwork.device_vendor}
                        </div>
                        <div class="hostname">{subNetwork.device_name}</div>
                        <div
                          class=""
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            return false;
                          }}
                        >
                          <div
                            class="id cursor-pointer p-3 flex"
                            onClick={() => {
                              setSelectedLanIdToDelete(subNetwork?.id);

                              setShowModal(!showModal());
                              setShowModalStr("delete_resource");
                            }}
                          >
                            <FaSolidTrash />
                          </div>
                        </div>
                      </div>
                    )}
                  </For>
                </>
              )}
            </For>
          </div>
        </Show>
      </div>
      <Show when={!props.isLoading && props.internalNetwork.length === 0}>
        <EmptyCard />
      </Show>
    </>
  );
}

export default InternalNetworks;
