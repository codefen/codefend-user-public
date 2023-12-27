//Core packages
import { createSignal, For } from "solid-js";
import "/src/flags.css";
import { RiUserFacesUserSettingsFill } from "solid-icons/ri";

import { defaultOrderBilling } from "../../../constantData";
import { formatDate } from "../../../utils/helper";
import EmptyCard from "./EmptyCard";
import { PageLoader } from "../../../views/Loader";

function SettingsOrderAndBilling(props) {
  const [orderBilling, setOrderBilling] = createSignal(defaultOrderBilling);

  return (
    <>
      <div class="card table">
        <div class="header">
          <div class="title">
            <div class="icon">
              <RiUserFacesUserSettingsFill />
            </div>
            <span>ORDERS & BILLING DETAILS</span>
          </div>
        </div>

        <div class="columns-name">
          <div class="date">date</div>
          <div class="full-name">order</div>
          <div class="duration">duration</div>
          <div class="price">price</div>
          <div class="price">discount</div>
          <div class="price">final price</div>
          <div class="status">status</div>
        </div>

        <div class="rows">
          <Show when={!props.isLoading} fallback={() => <PageLoader />}>
            <For each={props.orders}>
              {(order) => (
                <>
                  <div class="item">
                    <div class="date">
                      {formatDate(order?.creacion ?? new Date())}
                    </div>
                    <div class="full-name">{order.order_desc}</div>
                    <div class="duration">{order.order_plazo}</div>
                    <div class="price">${order.order_price}</div>
                    <div class="price">{order.order_price_disc}%</div>
                    <div class="price">${order.order_price_final}</div>
                    <div class="status">{order.order_paid}</div>
                  </div>
                </>
              )}
            </For>
          </Show>
        </div>
      </div>
      <Show when={!props.isLoading && props.orders.length === 0}>
        <EmptyCard />
      </Show>
    </>
  );
}

export default SettingsOrderAndBilling;
