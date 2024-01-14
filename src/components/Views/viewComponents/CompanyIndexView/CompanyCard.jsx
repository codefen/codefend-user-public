import { A } from "@solidjs/router";
import { FaSolidBuildingUser } from "solid-icons/fa";
import history from "../../../../history";

const CompanyCard = (props) => {
  return (
    <div class="pointer-events-none company-card">
      <div>
        <div className="img-wrapper">
          {props.image ? (
            <img src="" alt="company-icon" class />
          ) : (
            <FaSolidBuildingUser class="w-12 h-12 codefend-text-red" />
          )}
        </div>
      </div>
      <div className="company-detail">
        <span class="font-bold text-[18px]">
          {props.name ?? "Company Name"}
        </span>

        <div class="mt-2 flex flex-col">
          <span>ID: {props.id ?? "Company ID"}</span>
          <span>{props.website ?? "Company Website"}</span>
        </div>
        <a
          href="/dashboard"
          class={`pointer-events-auto link underline z-100 ${
            props.isSelected ? "visible" : "invisible"
          }`}
          onClick={() => {
            history.push("/dashboard");
          }}
        >
          Go to Company Dashboard
        </a>
      </div>
    </div>
  );
};

export default CompanyCard;
