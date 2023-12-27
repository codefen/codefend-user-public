//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import createModal from "../../../Store/modal.jsx";
import createUser from "../../../Store/user.jsx";
import AddRepositoryModal from "../modalComponents/addRepositoryModal.jsx";
import createInternalNetwork from "../../../Store/internalNetworks.jsx";
import VoxService from "../../../Services/apiHandler.jsx";
import ModalWrapper from "../modalComponents/ModalWrapper.jsx";
import { PageLoader } from "../../../views/Loader.jsx";
import { FaSolidCode } from "solid-icons/fa";
import EmptyCard from "./EmptyCard.jsx";
import { FaSolidTrash } from "solid-icons/fa";
import DeleteWebResourceModal from "../modalComponents/deleteWebResourceModal.jsx";
import history from "../../../history.jsx";
import { SourceCodeServices } from "../../../Services/ApiHandlerV2/sourceCode.handler.js";
import toast from "solid-toast";
import { HiOutlineBars3BottomLeft } from "solid-icons/hi";

function SourceCode(props) {
  const { showModal, setShowModal, setShowModalStr, showModalStr } =
    createModal;
  const [selectedSourceCodeIdToDelete, setSelectedSourceCodeIdToDelete] =
    createSignal(null);
  const [isDeletingSourceCode, setIsDeletingSourceCode] = createSignal(false);

  const handleDelete = () => {
    setIsDeletingSourceCode(true);
    console.log({ selectedId: selectedSourceCodeIdToDelete() });
    SourceCodeServices.delete(selectedSourceCodeIdToDelete())
      .then(() => {
        history.push(0);
        setShowModal(!showModal());
        toast.success("Successfully Deleted Source Code...");
      })
      .finally(() => {
        setIsDeletingSourceCode(false);
      });
  };

  return (
    <>
      <Show when={showModal() && showModalStr() === "delete_resource"}>
        <ModalWrapper>
          <div class="w-full w-96 internal-tables disable-border">
            <div class="modal-header">
                <HiOutlineBars3BottomLeft class="text-lg mr-2 text-fend-red"/>
                <span class="text-sm">Delete source code</span>
            </div>
            <DeleteWebResourceModal
              isDeleting={isDeletingSourceCode()}
              onDelete={handleDelete}
              id={selectedSourceCodeIdToDelete()}
              onDone={() => {
                history.push(0);
              }}
            />
            <div class="container flex items-center justify-center  mx-auto p-3 text-format"></div>
          </div>
        </ModalWrapper>
      </Show>
      <Show when={showModal() && showModalStr() === "add_repository"}>
        <ModalWrapper>
          <div class="w-full w-96 internal-tables disable-border">
            <div class="modal-header">
                <HiOutlineBars3BottomLeft class="text-lg mr-2 text-fend-red"/>
                <span class="text-sm">Add repository</span>
            </div>
            <AddRepositoryModal
              onDone={() => {
                props.refetchSourceCode();
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
              <FaSolidCode />
            </div>
            <span>Source code</span>
          </div>
          <div class="actions">
            <div
              onClick={() => {
                setShowModal(!showModal());
                setShowModalStr("add_repository");
              }}
            >
              Add repository
            </div>
          </div>
        </div>

        <div class="columns-name">
          <div class="id">id</div>
          <div class="full-name">name</div>
          <div class="url">address</div>
          <div class="boolean">visibility</div>
          <div class="source-code">source code</div>
          <div class="id">actions</div>
        </div>

        <Show when={!props.isLoading} fallback={() => <PageLoader />}>
          <div class="rows">
            <For each={props.sourceCode}>
              {(repository) => (
                <>
                  <div class="item">
                    <div class="id">{repository.id}</div>
                    <div class="full-name">{repository.name}</div>
                    <div class="url">{repository.access_link}</div>
                    <div class="boolean">{repository.is_public}</div>
                    <div class="source-code">{repository.source_code}</div>
                    <div
                      class=" id cursor-pointer p-3 flex"
                      onClick={() => {
                        setSelectedSourceCodeIdToDelete(repository.id);
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
      <Show when={!props.isLoading && props.sourceCode.length === 0}>
        <EmptyCard />
      </Show>
    </>
  );
}

export default SourceCode;
