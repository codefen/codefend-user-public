import React from "react";
import ProvidedTestingCredentials from "./ProvidedTestingCredentials";
import IssuesPanelMobileAndCloud from "./IssuesPanelMobileAndCloud";
import DashboardChart from "./dashboardChart.jsx";
import DashboardVulnerabilitiesStatus from "./dashboardVulnerabilitiesStatus.jsx";
import { MobileApplicationServices } from "../../../Services/ApiHandlerV2/mobileApplication.handler.js";
import { Show, createEffect, createResource } from "solid-js";
import { PageLoader } from "../../../views/Loader.jsx";
import { IssuesServices } from "../../../Services/ApiHandlerV2/issues.handler.js";
import { defaultMobileCloudCredentials } from "../../../constantData/index.js";
import MobileAppInfoCard from "./MobileAppInfoCard.jsx";

const getMobileDetails = async (mobileId) => {
  try {
    const data = await MobileApplicationServices.getOne(mobileId);
    return data;
  } catch (error) {
    console.log({ error });
  }
};

// const getIssues = async () => {
//   try {
//     const data = await IssuesServices.getAll();
//     return data;
//   } catch (error) {
//     console.log({ error });
//   }
// };

const MobileSelectedDetails = (props) => {
  const getSelectedMobileAppId = () => props.selectedMobileApp()?.id;

  const [mobileDetails, { refetch }] = createResource(
    getSelectedMobileAppId,
    getMobileDetails
  );

  // const [issuesInfo, { refetch }] = createResource(getIssues);

  // const issuesInfoData = () => {
  //   const issuesData = issuesInfo.loading ? {} : issuesInfo();
  //   return issuesData;
  // };

  const mobileDetailsInfo = () => {
    const mobileDetailsData = mobileDetails.loading
      ? {}
      : mobileDetails().unico;
    // console.log({ info: mobileDetailsData });
    return mobileDetailsData ?? {};
  };

  // createEffect(() => {
  //   const selectedMobileApp = props.selectedMobileApp();
  //   refetch();
  // }, []);

  return (
    <>
      <Show when={!mobileDetails.loading} fallback={() => <PageLoader />}>
        <div>
          <MobileAppInfoCard
            type="mobile"
            selectedApp={props.selectedMobileApp}
          />
        </div>
        <div class="flex items-center my-4 gap-x-4">
          <div class=" h-full self-stretch">
            <ProvidedTestingCredentials
              credentials={mobileDetailsInfo().creds ?? []}
              isLoading={mobileDetails.loading}
            />
          </div>
          <div class="flex-grow flex flex-col self-stretch">
            <DashboardChart
              isLoading={mobileDetails.loading}
              vulnerabilityByRisk={mobileDetailsInfo().issues_share ?? {}}
            />
            <DashboardVulnerabilitiesStatus
              vulnerabilityByShare={mobileDetailsInfo().issues_condicion ?? {}}
            />
          </div>
        </div>

        <section class="card table flex-grow ">
          <IssuesPanelMobileAndCloud
            isLoading={mobileDetails.loading}
            issues={mobileDetailsInfo()?.issues ?? []}
            refetchIssues={refetch}
          />
        </section>
      </Show>
    </>
  );
};

export default MobileSelectedDetails;
