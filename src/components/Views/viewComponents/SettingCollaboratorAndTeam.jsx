//Core packages
import { createSignal, For } from "solid-js";
import "/src/flags.css";
import { HiSolidUserGroup } from "solid-icons/hi";
import { defaultCollaborators } from "../../../constantData";
import { formatDate } from "../../../utils/helper";
import { PageLoader } from "../../../views/Loader";
import EmptyCard from "./EmptyCard";

function SettingCollaboratorAndTeam(props) {
  const [collaborators, setCollaborators] = createSignal(defaultCollaborators);

  return (
    <>
      <div class="card table">
        <div class="header">
          <div class="title">
            <div class="icon">
              <HiSolidUserGroup />
            </div>
            <span>COLLABORATORS AND TEAM MEMBERS</span>
          </div>
          <div class="actions">
            <div
            // onClick={() => {
            //   setShowModal(!showModal());
            //   setShowModalStr("add_member");
            // }}
            >
              ADD NEW MEMBER
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

        <div class="rows">
          <Show when={!props.isLoading} fallback={() => <PageLoader />}>
            <For each={props.members}>
              {(member) => (
                <>
                  <div class="item">
                    <div class="id">{member.id}</div>
                    <div class="full-name">{`${member.fname} ${member.lname}`}</div>
                    <div class="email">{member.email}</div>
                    <div class="phone">
                      {member.phone ? `+${member.phone}` : "-"}
                    </div>
                    <div class="role">{member.role}</div>
                  </div>
                </>
              )}
            </For>
          </Show>
        </div>
      </div>
      <Show when={!props.isLoading && props.members.length === 0}>
        <EmptyCard />
      </Show>
    </>
  );
}

export default SettingCollaboratorAndTeam;
