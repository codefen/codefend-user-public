//Core packages
import {
  createSignal,
  createEffect,
  Show,
  For,
  createResource,
} from "solid-js";

import toast from "solid-toast";

//Components
import InternalNetworks from "./viewComponents/internalNetworks.jsx";
import InternalNetworksChart from "./viewComponents/internalNetworksChart.jsx";
import { PageLoaderWhite } from "../../views/Loader.jsx";
import { InternalNetworkServices } from "../../Services/ApiHandlerV2";
const [scanLoading, setScanLoading] = createSignal(false);

const getInternalNetworks = async () => {
  try {
    const data = await InternalNetworkServices.getAll();
    return data;
  } catch (error) {
    console.log({ error });
  }
};

const scanLocal = async () => {
  setScanLoading(true);
  return window.__TAURI__.invoke('scan_local')
    .then((res) => {
      res = JSON.parse(res)
      console.log(res)
      if (res.success) {
        setScanLoading(false);
        return toast.success(res.success);
      }
      return setScanLoading(false);
    })
    .catch((err) => {
      setScanLoading(false);
      err = JSON.parse(err)
      if (err.error) {
        return toast.error(err.error);
      }
    })
}

function MainView() {
  const [internalNetwork, { refetch }] = createResource(getInternalNetworks);

  const internalNetworkDataInfo = () => {
    const internalNetworkData = internalNetwork.loading
      ? {}
      : internalNetwork();
    return internalNetworkData ?? {};
  };
  const [showScreen, setShowScreen] = createSignal(false);

  createEffect(() => {
    setTimeout(() => {
      setShowScreen(true);
    }, 50);
  });

  return (
    <>
      <main class={`lan ${showScreen() ? "actived" : ""}`}>
        <section class="left">
          <InternalNetworks
            isLoading={internalNetwork.loading}
            refetchInternalNetwork={refetch}
            internalNetwork={internalNetworkDataInfo()?.disponibles ?? []}
          />
        </section>
        <section class="right">
          <InternalNetworksChart
            isLoading={internalNetwork.loading}
            internalNetwork={internalNetworkDataInfo()?.disponibles ?? []}
          />
          <button
            onClick={() => {
              scanLocal();
            }}
            class="btn btn-primary full-w mt-4"
          >
            <Show when={scanLoading()} fallback={'REQUEST SCAN'}>
              <PageLoaderWhite/>
            </Show>
          </button>
          {/* <InternalNetworks /> */}
        </section>
      </main>
    </>
  );
}

export default MainView;
