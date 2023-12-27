import MobileAppCard from "./MobileAppCard";

const MobileAppInfoCard = (props) => {
  const isMobileType = props.type == "mobile";
  const buttonText = isMobileType
    ? " request pentest"
    : " request automated scan";

  const appName = isMobileType ? "app_name" : "cloud_name";
  // console.log({ infoApp: props.selectedApp() });

  return (
    <div
      class={`flex  justify-center mobile-card pr-5 ${
        isMobileType ? "" : "gap-x-28"
      }`}
    >
      <div class={`${isMobileType ? "max-w-[85%]" : ""}`}>
        <MobileAppCard
          name={props.selectedApp()[appName]}
          app_desc={
            isMobileType ? undefined : props.selectedApp()["cloud_desc"]
          }
          {...props.selectedApp()}
          showDetails={isMobileType ? false : true}
          isMobile={isMobileType}
        />
      </div>
      <button
        onClick={(e) => {
          alert("Processing your order");
        }}
        class="btn btn-primary mt-6 uppercase"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default MobileAppInfoCard;
