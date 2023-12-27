//Core packages
import {
  createSignal,
  createEffect,
  Show,
  For,
  createResource,
} from "solid-js";

//Components
import IssuesPanel from "./viewComponents/issuesPanel.jsx";
import IssuesReport from "./viewComponents/issuesReport.jsx";
import { IssuesServices } from "../../Services/ApiHandlerV2/issues.handler.js";
import DashboardChart from "./viewComponents/dashboardChart.jsx";
import DashboardVulnerabilitiesStatus from "./viewComponents/dashboardVulnerabilitiesStatus.jsx";
import { createStore } from "solid-js/store";

const getIssues = async () => {
  try {
    const data = await IssuesServices.getAll();
    console.log(data);
    return data;
  } catch (error) {
    console.log({ error });
  }
};

function MainView() {
  const [issuesInfo, { refetch }] = createResource(getIssues);
  const [issueFilters, setIssueFilters] = createStore({ filters: {} });
  const [showScreen, setShowScreen] = createSignal(false);

  createEffect(() => {
    setTimeout(() => {
      setShowScreen(true);
    }, 50);
  });

  const issuesInfoData = () => {
    const issuesData = issuesInfo.loading ? {} : issuesInfo();
    return issuesData ?? {};
  };

  const handleIssuesFilter = () => {
    const filterArray = Object.entries({ ...issueFilters.filters });
    if (filterArray.length === 0) return {};

    const selectedFilters = filterArray.reduce((acc, item) => {
      if (item[1]) acc.push(item[0].toLowerCase());
      return acc;
    }, []);

    const issuesDataList = issuesInfoData().issues
      ? issuesInfoData().issues
      : [];

    const filteredData = issuesDataList.filter((datum) =>
      selectedFilters.includes(datum.class.toLowerCase())
    );
    console.log({
      filteredData,
      selectedFilters,
      issueFilters: issueFilters.filters,
    });
    return { filteredData, isFiltered: selectedFilters.length !== 0 };
  };

  return (
    <>
      <main class={`issues-list ${showScreen() ? "actived" : ""}`}>
        <section class="left">
          <IssuesPanel
            isLoading={issuesInfo.loading}
            issues={
              handleIssuesFilter().isFiltered
                ? handleIssuesFilter().filteredData
                : issuesInfoData()?.issues ?? []
            }
            refetchIssues={refetch}
          />
        </section>
        <section class="right">
          <DashboardChart
            isLoading={issuesInfo.loading}
            vulnerabilityByRisk={issuesInfoData()?.issues_share ?? {}}
          />

          <DashboardVulnerabilitiesStatus
            vulnerabilityByShare={issuesInfoData()?.issues_condicion ?? {}}
          />

          <button
            onClick={(e) => {
              alert("Generating report");
            }}
            class="btn btn-primary full-w mt-4 mb-4"
          >
            GENERATE REPORT
          </button>

          <IssuesReport
            isLoading={issuesInfo.loading}
            issuesClasses={issuesInfoData()?.issues_class ?? {}}
            setIssueFilters={setIssueFilters}
          />
        </section>
      </main>
    </>
  );
}

export default MainView;
