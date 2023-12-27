//Core packages
import "/src/flags.css";
import { getCompanyMetric } from "../../../utils/helper";
import { FaSolidChartSimple } from "solid-icons/fa";

function InternalNetworksChart(props) {
  const getResources = () => {
    const resources = props.webResources.loading
      ? []
      : props.webResources().resources;
    return resources;
  };

  return (
    <>
      <div class="card stats">
        <div class="header">
          <div class="title">
            <div class="icon">
              <FaSolidChartSimple />
            </div>
            <span>Domain & server statics</span>
          </div>
          <div class="actions"></div>
        </div>
        <div class="content">
          <div class="stat">
            <div class="value">
             {getCompanyMetric(getResources(), "domain")}
            </div>
            <p class="text-fend-red">Domains</p>
          </div>
          <div class="stat">
            <div class="value">
              <span>{getCompanyMetric(getResources(), "subDomain")}</span>
            </div>
            <p>Subdomains</p>
          </div>
          <div class="stat">
            <div class="value">
              <span>{getCompanyMetric(getResources(), "uniqueIp")}</span>
            </div>
            <p>Unique IPS</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InternalNetworksChart;
