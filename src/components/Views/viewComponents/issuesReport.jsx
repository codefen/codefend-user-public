import { FaSolidChartSimple } from "solid-icons/fa";

const issuesReport = (props) => {
  const handleFilter = (e, issuesClass) => {
    const issuesClassValue = props.issuesClasses[issuesClass];
    if (issuesClassValue == 0) return;
    props.setIssueFilters("filters", issuesClass, e.target.checked);
  };

  return (
    <>
      <div class="card filtered">

      <div class="header">
            <div class="title">
              <div class="icon">
                <FaSolidChartSimple />
              </div>
              <span>FILTER AND GENERATE REPORT</span>
            </div>
          </div> 

        <div class="content filters">
          <For
            each={Object.keys(props.issuesClasses).filter(
              (item) => item !== "total"
            )}
          >
            {(issuesClass) => (
              <div class="filter">
                <div class="check">
                  <input
                    type="checkbox"
                    disabled={props.issuesClasses[issuesClass] == 0}
                    onChange={(e) => handleFilter(e, issuesClass)}
                    class=""
                  />
                  <span>{issuesClass}</span>
                </div>

                <div class="value">
                  {props.issuesClasses[issuesClass] == 0 ? (
                    <img src="/codefend/issues-bug-grey.svg" alt="bug-icon" />
                  ) : (
                    <img src="/codefend/issues-bug-icon.svg" alt="bug-icon" />
                  )}
                  <span>{props.issuesClasses[issuesClass]}</span>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </>
  );
};

export default issuesReport;
