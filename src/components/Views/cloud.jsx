//Core packages
import {
  createSignal,
  createEffect,
  Show,
  For,
  createResource,
  onMount,
} from "solid-js";

//Components
import IssuesPanelMobileAndCloud from "./viewComponents/IssuesPanelMobileAndCloud.jsx";
import IssuesReport from "./viewComponents/issuesReport.jsx";
import { IssuesServices } from "../../Services/ApiHandlerV2/issues.handler.js";
import DashboardChart from "./viewComponents/dashboardChart.jsx";
import MobileAppCard from "./viewComponents/MobileAppCard.jsx";
import MobileAppInfoCard from "./viewComponents/MobileAppInfoCard";
import DashboardVulnerabilitiesStatus from "./viewComponents/dashboardVulnerabilitiesStatus.jsx";
import ProvidedTestingCredentials from "./viewComponents/ProvidedTestingCredentials.jsx";
import { createStore } from "solid-js/store";
import { CloudServices } from "../../Services/ApiHandlerV2/cloud.handler.js";
import CloudSelectedDetails from "./viewComponents/CloudSelectedDetails.jsx";
import ModalWrapper from "./modalComponents/ModalWrapper.jsx";
import AddCloudModal from "./modalComponents/addCloudModal.jsx";
import { HiOutlineBars3BottomLeft } from "solid-icons/hi";
import EmptyScreenView from "./viewComponents/EmptyScreenView.jsx";

import createModal from "../../Store/modal.jsx";
import { PageLoader } from "../../views/Loader.jsx";
import history from "../../history.jsx";

const getCloudApplicationData = async () => {
  try {
    const data = await CloudServices.getAll();
    return data;
  } catch (error) {
    console.log({ error });
  }
};

function MainView() {
  const [showScreen, setShowScreen] = createSignal(false);
  const [cloudInfo, { refetch }] = createResource(getCloudApplicationData);
  const [selectedCloudApp, setSelectedCloudApp] = createSignal(null);

  const { showModal, setShowModal, setShowModalStr, showModalStr } =
    createModal;

  const handleCloudAppClick = (cloud) => {
    console.log({ cloud, selectedCloudApp: selectedCloudApp() });
    if (cloud.id === selectedCloudApp()?.id) return;
    setSelectedCloudApp(cloud);
  };

  const handleActiveCloudValidation = (cloud) => {
    return cloud.id === selectedCloudApp()?.id;
  };

  const getCloudInfo = () => {
    const cloudData = cloudInfo.loading ? [] : cloudInfo()?.disponibles;

    // const mobileDataGroup = getMobileDataGroup(mobileData);
    const cloudDataGroup = cloudData ?? [];

    return cloudDataGroup;
  };

  createEffect(() => {
    setTimeout(() => {
      setShowScreen(true);
    }, 50);
  });

  createEffect(() => {
    if (selectedCloudApp() === null) {
      const cloudData = getCloudInfo();
      if (!cloudInfo.loading && Boolean(cloudData.length)) {
        setSelectedCloudApp(cloudData[0]);
      }
    }
  }, [selectedCloudApp]);

  return (
    <>
      <Show when={showModal() && showModalStr() === "add_cloud"}>
        {showModal() && showModalStr() === "add_cloud" && (
          <ModalWrapper>
            <div class="w-full w-96 internal-tables disable-border">
              <div class="modal-header">
                <HiOutlineBars3BottomLeft class="text-lg mr-2 text-fend-red" />
                <span class="text-sm">Add cloud</span>
              </div>
              <AddCloudModal
                onDone={() => {
                  refetch();
                  history.push(0);
                }}
              />
              <div class="container flex items-center justify-center  mx-auto p-3 text-format"></div>
            </div>
          </ModalWrapper>
        )}
      </Show>
      <main class={`cloud ${showScreen() ? "actived" : ""}`}>
        <Show when={!cloudInfo.loading} fallback={() => <PageLoader />}>
          {!Boolean(getCloudInfo().length) ? (
            <EmptyScreenView
              buttonText="Add Cloud"
              onButtonClick={() => {
                setShowModal(!showModal());
                setShowModalStr("add_cloud");
              }}
            />
          ) : (
            <>
              <section class="left pb-4">
                <div class="flex w-full">
                  <button
                    onClick={(e) => {
                      setShowModal(!showModal());
                      setShowModalStr("add_cloud");
                    }}
                    class="btn btn-primary full-w mb-4"
                  >
                    ADD CLOUD
                  </button>
                </div>
                <div class="list">
                  <For each={getCloudInfo()}>
                    {(cloud) => (
                      <div
                        class="cursor-pointer"
                        onClick={() => handleCloudAppClick(cloud)}
                      >
                        <MobileAppCard
                          active={handleActiveCloudValidation(cloud)}
                          {...cloud}
                          app_desc={cloud.cloud_desc}
                          name={cloud.cloud_name}
                          onDone={(id) => {
                            refetch();

                            if (
                              selectedCloudApp() &&
                              selectedCloudApp().id === id
                            ) {
                              setSelectedCloudApp(null);
                            }
                          }}
                        />
                      </div>
                    )}
                  </For>
                  {/* <div class="w-[26rem]" onClick={() => handleMobileAppClick(-1)}>
              <MobileAppCard
                active={selectedMobileApp() === -1}
                isMainNetwork
              />
            </div> */}
                </div>
              </section>

              <section class="right">
                {selectedCloudApp() && (
                  <CloudSelectedDetails selectedCloudApp={selectedCloudApp} />
                )}
              </section>
            </>
          )}
        </Show>
      </main>
    </>
  );
}

export default MainView;
