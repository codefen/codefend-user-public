//Core packages
import { Show, For, onMount } from "solid-js";
import { Chart, Title, Tooltip, Legend, Colors } from "chart.js";
import { Doughnut } from "solid-chartjs";
import {
  computeInternalNetworkOSAndCount,
  isEmptyData,
  renderPercentage,
} from "../../../utils/helper.js";
import { osTypes } from "../../../constantData/index.js";
import { PageLoader } from "../../../views/Loader.jsx";
import { FaSolidChartSimple } from "solid-icons/fa";
import EmptyCard from "./EmptyCard.jsx";

function InternalNetworksChart(props) {
  const renderChartData = () => {
    const { total, ...otherMetrics } = computeInternalNetworkOSAndCount(
      props.internalNetwork
    );

    const chartData = {
      datasets: [
        {
          data: Object.values(otherMetrics),
          backgroundColor: [
            "#e85050", //critical
            "#e25365", //elevated
            "#e97e8b", //medium
            "#f1a7b1", //low
            "#f8d7db", //intel
          ],

          borderWidth: 0,
        },
      ],
      labels: Object.keys(otherMetrics).map((item) =>
        osTypes.includes(item.toLowerCase()) ? item : "Unknown"
      ),
    };
    return { chartData, otherMetrics, total };
  };

  onMount(() => {
    Chart.register(Title, Tooltip, Legend, Colors);
  });

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const dataEmptyState = () => {
    const { total, ...otherMetrics } = computeInternalNetworkOSAndCount(
      props.internalNetwork
    );
    return isEmptyData(otherMetrics);
  };

  return (
    <>
      <div class="card risk-chart">
        <Show when={!props.isLoading} fallback={() => <PageLoader />}>
          <div class="header">
            <div class="title">
              <div class="icon">
                <FaSolidChartSimple />
              </div>
              <span>Network devices by technology</span>
            </div>
          </div>
          {dataEmptyState() ? (
            <div class="content">
              <EmptyCard />
            </div>
          ) : (
            <div class="content">
              <div class="chart">
                <Doughnut
                  data={renderChartData().chartData}
                  options={chartOptions}
                />
              </div>
              <div class="table small">
                <div class="columns-name">
                  <div class="os">os</div>
                  <div class="count">count</div>
                  <div class="percent">percent</div>
                </div>

                <div class="row">
                  <For each={Object.keys(renderChartData().otherMetrics)}>
                    {(network) => (
                      <div class="item">
                        <div class="os">
                          {osTypes.includes(network.toLowerCase())
                            ? network
                            : "Unknown"}
                        </div>
                        <div class="count">
                          {renderChartData().otherMetrics[network]}
                        </div>
                        <div class="percent">
                          {renderPercentage(
                            renderChartData().otherMetrics[network],
                            renderChartData().total
                          )}
                        </div>
                      </div>
                    )}
                  </For>
                </div>
              </div>
            </div>
          )}
        </Show>
      </div>
    </>
  );
}

export default InternalNetworksChart;
