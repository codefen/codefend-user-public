//Core packages
import { Show, For, createResource } from "solid-js";
import "/src/flags.css";
import AddMobileModal from "../modalComponents/addMobileModal.jsx";
import createModal from "../../../Store/modal.jsx";
// import createResource from "../../../Store/resources";
import { MobileApplicationServices } from "../../../Services/ApiHandlerV2";
import { PageLoader } from "../../../views/Loader";
import { getMobileDataGroup } from "../../../utils/helper";
import ModalWrapper from "../modalComponents/ModalWrapper";
import { HiOutlineBars3BottomLeft } from "solid-icons/hi";

const getMobileApplicationData = async () => {
  try {
    const data = await MobileApplicationServices.getAll();
    return data;
  } catch (error) {
    console.log({ error });
  }
};

function MobileApplication() {
  const [mobileInfo, { refetch }] = createResource(getMobileApplicationData);

  const { showModal, setShowModal, setShowModalStr, showModalStr } =
    createModal;

  const getMobileInfo = () => {
    const mobileData = mobileInfo() ? mobileInfo().disponibles : [];

    const mobileDataGroup = getMobileDataGroup(mobileData);

    return mobileDataGroup;
  };

  return (
    <>
      <Show when={showModal() && showModalStr() === "add_mobile_app"}>
        <ModalWrapper>
          <div class="w-full w-96 internal-tables disable-border">
            <div class="modal-header">
                <HiOutlineBars3BottomLeft class="text-lg mr-2 text-fend-red"/>
                <span class="text-sm">Add mobile application</span>
            </div>
            <AddMobileModal
              onDone={() => {
                refetch();
              }}
            />
            <div class="container flex items-center justify-center  mx-auto p-3 text-format"></div>
          </div>
        </ModalWrapper>
      </Show>

      <div class="w-full internal-tables">
        <div class="p-3 pl-8 internal-tables-active flex">
          <p class="text-small text-left font-bold title-format border-r pr-2">
            Mobile application
          </p>
          <p
            onClick={() => {
              setShowModal(!showModal());
              setShowModalStr("add_mobile_app");
            }}
            class="text-small text-left font-bold title-format border-r px-2 underline cursor-pointer codefend-text-red"
          >
            Add application
          </p>
        </div>

        <div class="flex p-3 pl-8 text-format">
          <p class="text-base w-7/12">name</p>
          <p class="text-base w-2/12">reviews</p>
          <p class="text-base w-1/12">rank</p>
          <p class="text-base w-2/12">version</p>
        </div>
      </div>
      <Show when={!mobileInfo.loading} fallback={() => <PageLoader />}>
        <div class="w-full internal-tables internal-tables-scroll">
          <For each={getMobileInfo().reverse()}>
            {(resource) => (
              <>
                <div class="flex p-3 pl-8 internal-tables-active text-format red-border">
                  <p class="text-base w-12/12">{resource[0].app_name}</p>
                </div>

                <For each={resource}>
                  {(subresource) => (
                    <div class="flex pl-8 text-format">
                      <div class="flex w-7/12">
                        <span class="sub-domain-icon-v"></span>
                        <span class="sub-domain-icon-h"></span>
                        <p class="text-base pt-3 pb-3 flex  flex-col">
                          {subresource.app_android_link && (
                            <p class="flex  gap-x-1 items-center">
                              <span>Android:</span>
                              <span class="font-bold text-black">
                                {subresource.app_android_link}
                              </span>
                            </p>
                          )}
                          {subresource.app_ios_link && (
                            <p class="flex gap-x-1 items-center">
                              <span>Ios:</span>
                              <span class="font-bold text-black">
                                {subresource.app_ios_link}
                              </span>
                            </p>
                          )}
                        </p>
                      </div>
                      <p class="text-base w-2/12 pt-3 pb-3">
                        {subresource.app_android_opiniones && (
                          <p class="flex  gap-x-1 items-center">
                            <span>Android:</span>
                            <span class="font-bold text-black">
                              {subresource.app_android_opiniones}
                            </span>
                          </p>
                        )}
                        {subresource.app_ios_opiniones && (
                          <p class="flex gap-x-1 items-center">
                            <span>Ios:</span>
                            <span class="font-bold text-black">
                              {subresource.app_ios_opiniones}
                            </span>
                          </p>
                        )}
                      </p>
                      <p class="text-base w-1/12 pt-3 pb-3">
                        {subresource.app_android_rank && (
                          <p class="flex  gap-x-1 items-center">
                            <span>Android:</span>
                            <span class="font-bold text-black">
                              {subresource.app_android_rank}
                            </span>
                          </p>
                        )}
                        {subresource.app_ios_rank && (
                          <p class="flex gap-x-1 items-center">
                            <span>Ios:</span>
                            <span class="font-bold text-black">
                              {subresource.app_ios_rank}
                            </span>
                          </p>
                        )}
                      </p>
                      <p class="text-base w-2/12 pt-3 pb-3">
                        {subresource.app_android_version && (
                          <p class="flex  gap-x-1 items-center">
                            <span>Android:</span>
                            <span class="font-bold text-black">
                              {subresource.app_android_version}
                            </span>
                          </p>
                        )}
                        {subresource.app_ios_version && (
                          <p class="flex gap-x-1 items-center">
                            <span>Ios:</span>
                            <span class="font-bold text-black">
                              {subresource.app_ios_version}
                            </span>
                          </p>
                        )}
                      </p>
                    </div>
                  )}
                </For>
              </>
            )}
          </For>
        </div>
      </Show>
    </>
  );
}

export default MobileApplication;
