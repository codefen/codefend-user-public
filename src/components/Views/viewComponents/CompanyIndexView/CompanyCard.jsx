import { A } from "@solidjs/router";
import { FaSolidBuildingUser } from "solid-icons/fa";

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
        <span class="font-bold text-[16px]">
          {props.name ?? "Company Name"}
        </span>

        <div class="mt-4 flex flex-col">
          <span>{props.id ?? "Company ID"}</span>
          <span>{props.company_website ?? "Company Website"}</span>
        </div>
        {props.isSelected && (
          <A href="/dashboard" class="pointer-events-auto link underline">
            Go to Company Dashboard
          </A>
        )}
      </div>
    </div>
  );
};

export default CompanyCard;
