//Core packages
import { createSignal, createEffect, Show, For, onMount } from "solid-js";
import "/src/flags.css";
import { FaSolidChartSimple } from "solid-icons/fa";

function webApplicationCredentials() {
  return (
    <>
      <div class="card stats">
        <div class="header">
          <div class="title">
            <div class="icon">
              <FaSolidChartSimple />
            </div>
            <span>Credentials statics</span>
          </div>
          <div class="actions"></div>
        </div>
        <div class="content">
          <div class="stat">
            <div class="value">0</div>
            <p>Admin credentials</p>
          </div>
          <div class="stat">
            <div class="value">0</div>
            <p>User credentials</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default webApplicationCredentials;
