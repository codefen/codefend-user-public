import { defaultSocialAttackVectors } from "../../../constantData";
import { FaSolidChartSimple } from "solid-icons/fa";

const SocialAttackVectors = (props) => {
  return (
    <>
      <div class="card filtered">
      <div class="header">
            <div class="title">
              <div class="icon">
                <FaSolidChartSimple />
              </div>
              <span>ATTACK VECTORS</span>
            </div>
          </div> 
        <div class="content filters">
          <For each={Object.keys(defaultSocialAttackVectors)}>
            {(attack) => (
              <div class="filter">
                <div class="check">
                  <input
                    type="checkbox"
                    checked={defaultSocialAttackVectors[attack] === "enabled"}
                    class=" checkbox-color"
                  />
                  <span>{attack}</span>
                </div>

                <span>{defaultSocialAttackVectors[attack]}</span>
              </div>
            )}
          </For>
        </div>
      </div>
    </>
  );
};

export default SocialAttackVectors;
