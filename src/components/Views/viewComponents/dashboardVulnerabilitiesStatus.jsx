//Core packages
import { createSignal, createEffect, Show, For, onMount } from "solid-js";
import "/src/flags.css";
import history from "../../../history.jsx";
import { FaSolidChartSimple } from "solid-icons/fa";

function InternalNetworksChart(props) {
  const renderMetrics = () => {
    return {
      total: props.vulnerabilityByShare.total ?? 0,
      fixed: props.vulnerabilityByShare.fixed ?? 0,
      open: props.vulnerabilityByShare.open ?? 0,
    };
  };

  return (
    <div class="card stats">
      <div class="header">
        <div class="title">
          <div class="icon">
            <FaSolidChartSimple />
          </div>
          <span>Vulnerabilities by status</span>
        </div>
        <div class="actions"></div>
      </div>
      <div
        class="content"
        onClick={() => {
          history.push(`/issues`);
        }}
      >
        <div class="stat">
          <div class="value">
            <span class="text-fend-red">{renderMetrics().open}</span>
            {`/${renderMetrics().total}`}
          </div>
          <p class="text-fend-red">Open issues</p>
        </div>
        <div class="stat">
          <div class="value">
            <span>{renderMetrics().fixed}</span>
            {`/${renderMetrics().total}`}
          </div>
          <p>Fixed issues</p>
        </div>
        <div class="stat">
          <div class="value">{renderMetrics().total}</div>
          <p>Total issues</p>
        </div>
      </div>
    </div>
  );
}

export default InternalNetworksChart;
