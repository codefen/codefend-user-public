// //Core packages
// import { createSignal, createEffect  } from "solid-js";

// //Components
// import MobileApplication from "./viewComponents/mobileApplication.jsx";

// function MainView() {
//   const [showScreen, setShowScreen] = createSignal(false);

//   createEffect(() => {
//     setTimeout(() => {
//       setShowScreen(true);
//     }, 50);
//   });

//   return (
//     <>
//       <main class={`webapp ${ showScreen() ? "actived" : "" }`}>
//         <section class="w-8/12 pr-2">
//           <MobileApplication />
//         </section>
//         <section class="w-4/12 pl-2">
//         </section>
//       </main>
//     </>
//   );
// }

// export default MainView;

//Core packages
import {
  createSignal,
  createEffect,
  Show,
  For,
  createResource,
} from "solid-js";

//Components
import MobileAppCard from "./viewComponents/MobileAppCard.jsx";
import { MobileApplicationServices } from "../../Services/ApiHandlerV2/mobileApplication.handler.js";
import MobileSelectedDetails from "./viewComponents/mobileSelectedDetails.jsx";
import MobileAppModal from "./modalComponents/addMobileModal.jsx";
import createModal from "../../Store/modal.jsx";
import ModalWrapper from "./modalComponents/ModalWrapper.jsx";
import { HiOutlineBars3BottomLeft } from "solid-icons/hi";
import { PageLoader } from "../../views/Loader.jsx";
import EmptyScreenView from "./viewComponents/EmptyScreenView.jsx";
import history from "../../history.jsx";

const getMobileApplicationData = async () => {
  try {
    const data = await MobileApplicationServices.getAll();
    return data;
  } catch (error) {
    console.log({ error });
  }
};

function MainView() {
  // const [issuesInfo, { refetch }] = createResource(getIssues);
  // const [issueFilters, setIssueFilters] = createStore({ filters: {} });
  const { showModal, setShowModal, setShowModalStr, showModalStr } =
    createModal;
  const [showScreen, setShowScreen] = createSignal(false);
  const [mobileInfo, { refetch }] = createResource(getMobileApplicationData);
  const [selectedMobileApp, setSelectedMobileApp] = createSignal(null);

  // console.log({ refetch }, "hereeeeee");
  const handleMobileAppClick = (mobile) => {
    // console.log({ selectedMobileApp: selectedMobileApp(), mobile });

    if (mobile.id === selectedMobileApp()?.id) return;
    setSelectedMobileApp(mobile);
  };

  const handleActiveMobileValidation = (mobile) => {
    // console.log({ mobile, selected: selectedMobileApp() });

    return mobile.id === selectedMobileApp()?.id;
  };

  const getMobileInfo = () => {
    const mobileData = mobileInfo.loading ? [] : mobileInfo()?.disponibles;

    // const mobileDataGroup = getMobileDataGroup(mobileData);
    const mobileDataGroup = mobileData ?? [];
    // console.log({ mobileDataGroup });
    return mobileDataGroup;
  };

  createEffect(() => {
    setTimeout(() => {
      setShowScreen(true);
    }, 50);
  });

  createEffect(() => {
    if (selectedMobileApp() === null) {
      const mobileData = getMobileInfo();
      if (!mobileInfo.loading && Boolean(mobileData.length)) {
        setSelectedMobileApp(mobileData[0]);
      }
    }
  }, [selectedMobileApp]);

  return (
    <>
      <Show when={showModal() && showModalStr() === "add_mobile"}>
        <ModalWrapper>
          <div class="w-full w-96 internal-tables disable-border">
            <div class="modal-header">
              <HiOutlineBars3BottomLeft class="text-lg mr-2 text-fend-red" />
              <span class="text-sm">Add mobile app</span>
            </div>
            <MobileAppModal
              onDone={() => {
                refetch();
                history.push(0);
              }}
            />
            <div class="container flex items-center justify-center  mx-auto p-3 text-format"></div>
          </div>
        </ModalWrapper>
      </Show>
      <main class={`mobile ${showScreen() ? "actived" : ""}`}>
        <Show when={!mobileInfo.loading} fallback={() => <PageLoader />}>
          {!Boolean(getMobileInfo().length) ? (
            <EmptyScreenView
              buttonText="Add Mobile"
              onButtonClick={() => {
                setShowModal(!showModal());
                setShowModalStr("add_mobile");
              }}
            />
          ) : (
            <>
              <section class="left pb-4">
                <div class="flex w-full">
                  <button
                    onClick={(e) => {
                      setShowModal(!showModal());
                      setShowModalStr("add_mobile");
                    }}
                    class="btn btn-primary full-w mb-4"
                  >
                    ADD MOBILE APP
                  </button>
                </div>
                <div class="list">
                  <For each={getMobileInfo()}>
                    {(mobile) => (
                      <div
                        class="cursor-pointer"
                        onClick={() => handleMobileAppClick(mobile)}
                      >
                        <MobileAppCard
                          active={handleActiveMobileValidation(mobile)}
                          onDone={(id) => {
                            refetch();
                            if (
                              selectedMobileApp() &&
                              selectedMobileApp().id === id
                            ) {
                              setSelectedMobileApp(null);
                            }
                          }}
                          type="mobile"
                          {...mobile}
                          name={mobile.app_name}
                        />
                      </div>
                    )}
                  </For>
                </div>
              </section>
              <section class="right">
                {selectedMobileApp() && (
                  <MobileSelectedDetails
                    selectedMobileApp={selectedMobileApp}
                  />
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
