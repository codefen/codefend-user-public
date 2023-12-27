import { FaSolidChartSimple } from "solid-icons/fa";
import { roleMap } from "../../../constantData";

const SocialEngineeringMembers = (props) => {
  const renderMembers = () => {
    const { total, ...members } = props.members;

    console.log({ members });

    return { members };
  };

  const handleDepartmentFilter = (e, member) => {
    const memberValue = props.members[member];
    console.log({ memberValue });
    if (memberValue == 0) return;
    props.setSocialFilters("department", member, e.target.checked);
  };

  return (
    <>
      <div class="card filtered">
        <div class="header">
          <div class="title">
            <div class="icon">
              <FaSolidChartSimple />
            </div>
            <span>MEMBERS BY DEPARTMENTS</span>
          </div>
        </div>
        <div class="content filters">
          <For each={Object.keys(renderMembers().members)}>
            {(member) => (
              <div class="filter">
                <div class="check">
                  <input
                    id={member}
                    type="checkbox"
                    disabled={props.members[member] == 0}
                    onChange={(e) => handleDepartmentFilter(e, member)}
                    class=""
                  />
                  <label for={member}>
                    {roleMap[member] ?? "Unknown roles"}
                  </label>
                </div>

                <div class="value">
                  {props.members[member] == 0 ? (
                    <img
                      src="/codefend/people-inactive-icon.svg"
                      alt="bug-icon"
                    />
                  ) : (
                    <img
                      src="/codefend/people-active-icon.svg"
                      alt="bug-icon"
                    />
                  )}
                  <span>{props.members[member]} members</span>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </>
  );
};

export default SocialEngineeringMembers;
