//Core packages
import { createSignal, createEffect, Show, For, onMount } from "solid-js";
import "/src/flags.css";
import history from "../../../history.jsx";
import { FaRegularCircleDot } from "solid-icons/fa";

function InternalNetworksChart(props) {
  return (
    <div class="card stats">
      <div class="header">
        <div class="title">
          <div class="icon">
            <FaRegularCircleDot />
          </div>
          <span>Supervised assets</span>
        </div>
        <div class="actions"></div>
      </div>
      <div class="content">
        <For each={Object.keys(props.resources)}>
          {(resource) => (
            <div
              class="stat"
              onClick={() => {
                history.push(`/${resource}`);
              }}
            >
              <div class="value">{props.resources[resource]}</div>
              <p>{resource}</p>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}

export default InternalNetworksChart;
