//Core packages
import { createSignal, createEffect, For } from "solid-js";
import "/src/flags.css";
import { getCountryMetrics } from "../../../utils/helper";
import { FaRegularCircleDot } from "solid-icons/fa";

function InternalNetworksChart(props) {
  const [resources, setResources] = createSignal([]);

  createEffect(() => {
    setResources(getCountryMetrics(props.webResources()?.resources));
  });

  return (
    <>
      <div class="card table">
        <div class="header">
          <div class="title">
            <div class="icon">
              <FaRegularCircleDot />
            </div>
            <span>Supervised assets</span>
          </div>
          <div class="actions"></div>
        </div>
        <div class="columns-name">
          <div class="location">location</div>
          <div class="count">count</div>
          <div class="percent">percent</div>
        </div>
          <div class="rows">
            <For each={resources()}>
              {(resource) => (
                  <section class="item">
   
                    <div class="location">
                    <span
                      class={
                        "flag flag-" +
                        resource.countryCode.toLowerCase() +
                        " mr-3"
                      }
                    ></span>
                      {resource.country}
                      </div>
                    <div class="count">{resource.count}</div>
                    <div class="percent">{resource.percentage}%</div>
                  </section>
              )}
            </For>
          </div>
      </div> 
    </>
  );
}

export default InternalNetworksChart;
