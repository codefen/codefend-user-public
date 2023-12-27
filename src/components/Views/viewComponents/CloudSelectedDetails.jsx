import React from "react";
import ProvidedTestingCredentials from "./ProvidedTestingCredentials";
import IssuesPanelMobileAndCloud from "./IssuesPanelMobileAndCloud";
import DashboardChart from "./dashboardChart.jsx";
import DashboardVulnerabilitiesStatus from "./dashboardVulnerabilitiesStatus.jsx";
import { Show, createEffect, createResource } from "solid-js";
import { PageLoader } from "../../../views/Loader.jsx";
import { CloudServices } from "../../../Services/ApiHandlerV2/cloud.handler.js";
import MobileAppInfoCard from "./MobileAppInfoCard.jsx";
import { defaultMobileCloudCredentials } from "../../../constantData/index.js";
import { IssuesServices } from "../../../Services/ApiHandlerV2/issues.handler.js";

const getIssues = async () => {
  try {
    const data = await IssuesServices.getAll();
    return data;
  } catch (error) {
    console.log({ error });
  }
};

const CloudSelectedDetails = (props) => {
  // const getSelectedCloudAppId = () => props.selectedCloudApp()?.id;

  const [issuesInfo, { refetch }] = createResource(getIssues);

  console.log({ refetch }, "cloud hereeeeee");

  const issuesInfoData = () => {
    const issuesData = issuesInfo.loading ? {} : issuesInfo();
    // console.log({ infoCloud: issuesData });
    return issuesData;
  };

  // const [cloudDetails, { refetch }] = createResource(
  //   getSelectedCloudAppId,
  //   getCloudDetails
  // );

  // const cloudDetailsInfo = () => {
  //   const cloudDetailsData = cloudDetails.loading ? {} : cloudDetails().unico;
  //   return cloudDetailsData;
  // };

  createEffect(() => {
    const selectedCloudApp = props.selectedCloudApp();
    refetch();
  }, []);

  return (
    <>
      <Show when={!issuesInfo.loading} fallback={() => <PageLoader />}>
        <div>
          <MobileAppInfoCard selectedApp={props.selectedCloudApp} />
        </div>
        <div class="flex items-center my-4 gap-x-4">
          <div class=" ">
            <DashboardChart
              isLoading={issuesInfo.loading}
              vulnerabilityByRisk={issuesInfoData().issues_share ?? {}}
            />
          </div>
          <div class="flex-grow flex flex-col">
            <ProvidedTestingCredentials
              credentials={issuesInfoData().creds ?? []}
              isLoading={issuesInfo.loading}
            />
            <DashboardVulnerabilitiesStatus
              vulnerabilityByShare={issuesInfoData().issues_condicion ?? {}}
            />
          </div>
        </div>

        <section class="card table flex-grow ">
          <IssuesPanelMobileAndCloud
            isLoading={issuesInfo.loading}
            issues={issuesInfoData().issues}
            refetchIssues={refetch}
          />
        </section>
      </Show>
    </>
  );
};

export default CloudSelectedDetails;
