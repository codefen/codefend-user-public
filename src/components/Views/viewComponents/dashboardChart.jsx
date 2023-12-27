//Core packages
import { createSignal, createEffect, Show, For, onMount } from "solid-js";
import { Chart, Title, Tooltip, Legend, Colors } from "chart.js";
import { Doughnut } from "solid-chartjs";
import { PageLoader } from "../../../views/Loader";
import { isEmptyData, renderPercentage } from "../../../utils/helper";
import { FaSolidBug } from "solid-icons/fa";
import EmptyCard from "./EmptyCard";

function InternalNetworksChart(props) {
  onMount(() => {
    Chart.register(Title, Tooltip, Legend, Colors);
  });

  const renderChartData = () => {
    const { total, ...otherMetrics } = props.vulnerabilityByRisk;

    const chartData = {
      datasets: [
        {
          data: Object.values(otherMetrics),
          /*Note: this colors are commented according to the pie chart
          that is generated for the vulnerabilities and findings,
          it may or could be different

          */
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
      labels: Object.keys(otherMetrics),
    };
    return { chartData, otherMetrics };
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const dataEmptyState = () => {
    const { total, ...otherMetrics } = props.vulnerabilityByRisk;
    return isEmptyData(otherMetrics);
  };

  return (
    <>
      <div class="card risk-chart">
        <Show when={!props.isLoading} fallback={() => <PageLoader />}>
          <div class="header">
            <div class="title">
              <div class="icon">
                <FaSolidBug />
              </div>
              <span>Vulnerabilities by risk</span>
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
                  <div class="risk">risk</div>
                  <div class="count">count</div>
                  <div class="percent">percent</div>
                </div>
                <div class="rows">
                  <For each={Object.keys(renderChartData().otherMetrics)}>
                    {(metric) => (
                      <div class="item">
                        <div class="risk">{metric}</div>
                        <div class="count">
                          {renderChartData().otherMetrics[metric]}
                        </div>
                        <div class="percent">
                          {renderPercentage(
                            renderChartData().otherMetrics[metric],
                            props.vulnerabilityByRisk.total
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
