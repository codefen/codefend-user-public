//Core packages
import { Show, For, createResource } from "solid-js";
import createModal from "../../../Store/modal.jsx";
import AddSocialModal from "../modalComponents/addSocialModal.jsx";
import { SocialsServices } from "../../../Services/ApiHandlerV2/socials.handler.js";
import { PageLoader } from "../../../views/Loader.jsx";
import ModalWrapper from "../modalComponents/ModalWrapper.jsx";
import { FaSolidPeopleGroup } from "solid-icons/fa";
import EmptyCard from "./EmptyCard.jsx";
import { HiOutlineBars3BottomLeft } from "solid-icons/hi";
import { roleMap } from "../../../constantData/index.js";

function SourceCode(props) {
  const { showModal, setShowModal, setShowModalStr, showModalStr } =
    createModal;

  const mapRole = (role) => roleMap[role] || "Unknown Role";

  return (
    <>
      <Show when={showModal() && showModalStr() === "add_member"}>
        <ModalWrapper>
          <div class="w-full w-96 internal-tables disable-border">
            <div class="modal-header">
              <HiOutlineBars3BottomLeft class="text-lg mr-2 text-fend-red" />
              <span class="text-sm">Add a new member</span>
            </div>
            <AddSocialModal
              onDone={() => {
                props.refetch();
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
              <FaSolidPeopleGroup />
            </div>
            <span>Social Engineering</span>
          </div>
          <div class="actions">
            <div
              onClick={() => {
                setShowModal(!showModal());
                setShowModalStr("add_member");
              }}
            >
              Add profile
            </div>
          </div>
        </div>

        <div class="columns-name">
          <div class="id">id</div>
          <div class="full-name">full name</div>
          <div class="email">email</div>
          <div class="phone">phone</div>
          <div class="role">role</div>
        </div>

        <Show when={!props.isLoading} fallback={() => <PageLoader />}>
          <div class="rows">
            <For each={props.socials.reverse()}>
              {(social) => (
                <>
                  <div class="item">
                    <div class="id">{social.id}</div>
                    <div class="full-name">
                      {social.member_fname} {social.member_lname}
                    </div>
                    <div class="email">{social.member_email}</div>
                    <div class="phone">{social.member_phone}</div>
                    <div class="role">{mapRole(social.member_role)}</div>
                  </div>
                </>
              )}
            </For>
          </div>
        </Show>
      </div>
      <Show when={!props.isLoading && props.socials.length === 0}>
        <EmptyCard />
      </Show>
    </>
  );
}

export default SourceCode;
