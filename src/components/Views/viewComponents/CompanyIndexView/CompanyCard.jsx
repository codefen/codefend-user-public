import { A } from "@solidjs/router";

const CompanyCard = () => {
  return (
    <div class="pointer-events-none company-card">
      <div className="img-wrapper"></div>
      <div className="contents">
        <A href="/dashboard" class="pointer-events-auto link">
          Go to Dashboard
        </A>
      </div>
    </div>
  );
};

export default CompanyCard;
