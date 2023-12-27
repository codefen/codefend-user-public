//Core packages
import {
  createSignal,
  createEffect,
  Show,
  For,
  createResource,
} from "solid-js";
import toast from "solid-toast";
import { readDir, createDir, BaseDirectory } from '@tauri-apps/api/fs';
import { appDir } from '@tauri-apps/api/path';
import history from "../../history.jsx";

//Components
import Endpoints from "./viewComponents/endpointsApps.jsx";
import { PageLoaderWhite } from "../../views/Loader.jsx";
import { EndpointServices } from "../../Services/ApiHandlerV2";
const [scanLoading, setScanLoading] = createSignal(false);


const getEndpoints = async () => {
  try {
    const mac_address = await window.__TAURI__.invoke('get_mac_addr')
    const data = await EndpointServices.getAll(JSON.parse(mac_address));
    console.log(data)
    return data;
  } catch (error) {
    console.log({ error });
  }
};

const scanLocal = async () => {
  setScanLoading(true);
  return window.__TAURI__.invoke('scan_local', { sessionId: window.localStorage.getItem("token") })
    .then((res) => {
      res = JSON.parse(res)
      console.log(res)
      if (res.success) {
        setScanLoading(false);
        toast.success(res.success);
        return history.push(0);
      }
      return setScanLoading(false);
    })
    .catch((err) => {
      setScanLoading(false);
      console.log(err)
      err = JSON.parse(err)
      if (err.error) {
        return toast.error(err.error);
      }
    })
}

function MainView() {
  const [internalNetwork, { refetch }] = createResource(getEndpoints);

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
          <Endpoints
            isLoading={internalNetwork.loading}
            refetchInternalNetwork={refetch}
            endpoints={internalNetworkDataInfo()?.data ?? []}
          />
        </section>
        <section class="right">

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
