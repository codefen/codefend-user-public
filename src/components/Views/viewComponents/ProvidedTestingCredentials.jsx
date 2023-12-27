//Core packages
import { createSignal, createEffect, Show, For, onMount } from "solid-js";
import "/src/flags.css";
import history from "../../../history.jsx";
import { FaSolidChartSimple } from "solid-icons/fa";
import createModal from "../../../Store/modal.jsx";
import ModalWrapper from "../modalComponents/ModalWrapper.jsx";
import CloudQuickAction from "../modalComponents/cloudQuickActions.jsx";
import TestingCredentialCard from "./TestingCredentialCard.jsx";
import { HiOutlineBars3BottomLeft } from "solid-icons/hi";
import EmptyCard from "./EmptyCard.jsx";

function ProvidedTestingCredentials(props) {
  const { showModal, setShowModal, setShowModalStr, showModalStr } =
    createModal;
  return (
    <>
      <Show when={showModal() && showModalStr() === "quick_actions"}>
        <ModalWrapper>
          <div class="w-full w-96 internal-tables disable-border">
            <div class="modal-header">
              <HiOutlineBars3BottomLeft class="text-lg mr-2 text-fend-red" />
              <span class="text-sm">Add cloud actions</span>
            </div>
            <CloudQuickAction
              onDone={() => {
                props.refetchResources();
              }}
            />
            <div class="container flex items-center justify-center  mx-auto p-3 text-format"></div>
          </div>
        </ModalWrapper>
      </Show>
      <div class="card user-list">
        <div class="header">
          <div class="title">
            <div class="icon">
              <FaSolidChartSimple />
            </div>
            <span>provided testing credentials </span>
          </div>
          {/* <div class="actions">
            <div
              onClick={() => {
                setShowModal(!showModal());
                setShowModalStr("quick_actions");
              }}
            >
              Quick Actions
            </div>
          </div> */}
        </div>
        <div class="list">
          <For each={props.credentials}>
            {(cred, index) => (
              <TestingCredentialCard
                {...cred}
                hideBorderBottom={props.credentials.length - 1 === index()}
              />
            )}
          </For>
        </div>
      </div>
      <Show when={!props.isLoading && props.credentials.length === 0}>
        <EmptyCard />
      </Show>
    </>
  );
}

export default ProvidedTestingCredentials;
