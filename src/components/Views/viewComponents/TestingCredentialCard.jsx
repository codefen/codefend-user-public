import { FaRegularUser, FaSolidLock, FaSolidShield } from "solid-icons/fa";

const TestingCredentialCard = (props) => {
  return (
    <div class={`testing-cred ${props.hideBorderBottom ? "hide-border" : ""}`}>
      <div class="avatar">
        <img src="/codefend/user-icon.svg" class="" alt="profile-icon" />
      </div>
      <div class="info">
        <div class="icons">
          {/* <span><FaRegularUser /></span>
          <span><FaSolidLock /></span>
          <span><FaSolidShield /></span> */}
          <span>username:</span>
          <span>password:</span>
          <span>access lvl:</span>
        </div>
        <div class="text">
          <span>{props?.username ?? ""}</span>
          <span>{props?.password ?? ""}</span>
          <span>{props?.access_lvl ?? ""}</span>
        </div>
      </div>
    </div>
  );
};

export default TestingCredentialCard;
