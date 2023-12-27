//Core packages
import { Show, For, createEffect, createSignal } from "solid-js";
import "/src/flags.css";
import AddDomainModal from "../modalComponents/addDomainModal.jsx";
import AddSubDomainModal from "../modalComponents/addSubDomainModal.jsx";
import createModal from "../../../Store/modal.jsx";
import { PageLoader } from "../../../views/Loader";
import ModalWrapper from "../modalComponents/ModalWrapper";
import { FaSolidGlobe, FaSolidTrash } from "solid-icons/fa";
import DeleteWebResourceModal from "../modalComponents/deleteWebResourceModal.jsx";
import history from "../../../history.jsx";
import EmptyCard from "./EmptyCard.jsx";
import { HiOutlineBars3BottomLeft } from "solid-icons/hi";

function InternalNetworks(props) {
  const { showModal, setShowModal, setShowModalStr, showModalStr } =
    createModal;
  const [selectedId, setSelectedId] = createSignal(0);

  const getResources = () => {
    const resources = props.webResources.loading
      ? []
      : props.webResources().resources;

    // console.log({ resources });
    return resources ?? [];
  };

  return (
    <>
      <Show when={showModal() && showModalStr() === "add_domain"}>
        <ModalWrapper>
          <div class="w-full w-96 internal-tables disable-border">
            <div class="modal-header">
              <HiOutlineBars3BottomLeft class="text-lg mr-2 text-fend-red" />
              <span class="text-sm">Add web resource</span>
            </div>
            <AddDomainModal
              onDone={() => {
                props.refetchResources();
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
              <HiOutlineBars3BottomLeft class="text-lg mr-2 text-fend-red" />
              <span class="text-sm">Delete web resource</span>
            </div>
            <DeleteWebResourceModal
              id={selectedId()}
              onDone={() => {
                history.push(0);
              }}
            />
            <div class="container flex items-center justify-center  mx-auto p-3 text-format"></div>
          </div>
        </ModalWrapper>
      </Show>
      <Show when={showModal() && showModalStr() === "add_subdomain"}>
        <ModalWrapper>
          <div class="w-full w-96 internal-tables disable-border">
            <div class="modal-header">
              <HiOutlineBars3BottomLeft class="text-lg mr-2 text-fend-red" />
              <span class="text-sm">Add web sub-resource</span>
            </div>
            <AddSubDomainModal
              onDone={() => props.refetchResources()}
              webResources={getResources()}
            />
            <div class="container flex items-center justify-center  mx-auto p-3 text-format"></div>
          </div>
        </ModalWrapper>
      </Show>

      <div class="card table flex-grow">
        <div class="header">
          <div class="title">
            <div class="icon">
              <FaSolidGlobe />
            </div>
            <span>Detected domains and subdomains</span>
          </div>
          <div class="actions">
            <div
              onClick={() => {
                if (props.webResources.loading) return;
                setShowModal(!showModal());
                setShowModalStr("add_domain");
              }}
            >
              Add domain
            </div>
            <div
              onClick={() => {
                if (props.webResources.loading) return;

                setShowModal(!showModal());
                setShowModalStr("add_subdomain");
              }}
            >
              Add subdomain
            </div>
          </div>
        </div>

        <div class="columns-name">
          <div class="id">id</div>
          <div class="domain-name">domain</div>
          <div class="server-ip">main server</div>
          <div class="location">location</div>
          <div class="province">province, city</div>
          <div class="id">actions</div>
        </div>

        <Show
          when={!props.webResources.loading}
          fallback={() => <PageLoader />}
        >
          <div class="rows">
            <For each={getResources().reverse()}>
              {(mainNetwork) => (
                <>
                  <div class="item left-marked">
                    <div class="id">{mainNetwork?.id}</div>
                    <div class="domain-name">
                      {mainNetwork?.resource_domain}
                    </div>
                    <div class="server-ip">{mainNetwork?.main_server}</div>
                    <div class="location">
                      <span
                        class={
                          "flag flag-" +
                          mainNetwork.server_pais_code.toLowerCase() +
                          " mr-3"
                        }
                      ></span>
                      <span class="">{mainNetwork?.server_pais}</span>
                    </div>
                    <div class="province">
                      {mainNetwork?.server_pais_provincia},{" "}
                      {mainNetwork?.server_pais_ciudad}
                    </div>
                    <div
                      class="cursor-pointer p-3 flex"
                      onClick={() => {
                        setSelectedId(mainNetwork?.id);
                        setShowModal(!showModal());
                        setShowModalStr("delete_resource");
                      }}
                    >
                      <FaSolidTrash />
                    </div>
                  </div>

                  <For
                    each={mainNetwork.childs === null ? [] : mainNetwork.childs}
                  >
                    {(subNetwork) => (
                      <div class="item">
                        <div class="id">{subNetwork?.id}</div>
                        <div class="domain-name lined">
                          <span class="sub-domain-icon-v"></span>
                          <span class="sub-domain-icon-h"></span>
                          <span class="truncate">
                            {subNetwork?.resource_domain}
                          </span>
                        </div>
                        <div class="server-ip">{subNetwork?.main_server}</div>
                        <div class="location">
                          <span
                            class={
                              "flag flag-" +
                              subNetwork.server_pais_code.toLowerCase() +
                              " mr-3"
                            }
                          ></span>
                          <span class="">{subNetwork.server_pais}</span>
                        </div>
                        <div class="province">
                          {subNetwork?.server_pais_provincia},{" "}
                          {subNetwork?.server_pais_ciudad}
                        </div>
                        <div
                          class=""
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            return false;
                          }}
                        >
                          <div
                            class="cursor-pointer p-3 flex"
                            onClick={() => {
                              setSelectedId(subNetwork?.id);
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
      <Show when={!props.webResources.loading && getResources().length === 0}>
        <EmptyCard />
      </Show>
    </>
  );
}

export default InternalNetworks;
