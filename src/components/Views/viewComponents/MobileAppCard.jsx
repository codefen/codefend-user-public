import toast from "solid-toast";
import { CloudServices } from "../../../Services/ApiHandlerV2/cloud.handler";
import { MobileApplicationServices } from "../../../Services/ApiHandlerV2/mobileApplication.handler";
import createModal from "../../../Store/modal";
import { defaultMobileCloudResourceAsset } from "../../../constantData";
import ModalWrapper from "../modalComponents/ModalWrapper";
import MobileCloudDeleteModal from "../modalComponents/MobileCloudDeleteModal";
import history from "../../../history";

/*
  This poem actually confuses me quite a lot.
  Is this working for mobile or cloud? or both?
  we should have clearly defined those internal structures.
  Please attend this with high priority.
  Once addressed, remove this comment.
  Thanks!
*/

/* 
  works for both mobile and cloud 
  i can rename the component to make it clearer
*/

const MobileAppCard = (props) => {
  const isMainGoogleNetwork = Boolean(props.isMainNetwork);
  const isDetails = Boolean(props.showDetails);
  const isMobileScreen = props.type === "mobile";
  const isImage = props.app_media;
  const deleteText = isMobileScreen ? "delete mobile" : "delete cloud";
  const { showModal, setShowModal, setShowModalStr, showModalStr } =
    createModal;

  const handleMobileCloudDelete = async (id) => {
    try {
      const isMobileType = !Boolean(props.cloud_name);
      const action = isMobileType ? MobileApplicationServices : CloudServices;
      console.log({ isMobileType });
      await action.delete(id);
      props.onDone?.(id) ?? history.push(0);

      toast.success(
        `successfully deleted ${isMobileType ? "mobile app" : "cloud"} `
      );
    } catch (error) {
      console.log({ deleteError: error });
    } finally {
      setShowModal(!showModal());
    }
  };

  return (
    <>
      <Show when={showModal() && showModalStr() === "delete_confirmation"}>
        <div
          onClick={() => {
            setShowModal(!showModal());
          }}
          class="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-20 z-20 py-10"
        >
          {/* <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            class="max-h-full max-w-xl overflow-y-auto bg-white"
          >
            <div class="w-full mt-4">
              <div class="w-full w-96 px-8 disable-border">
                <div class="p-3 flex">
                  <p class="text-small text-left font-bold title-format">
                    Are you sure you want to delete {`"${props.name}" ?`}
                  </p>
                </div>
                <div class="mt-6 flex justify-center">
                  <button
                    onClick={() => {
                      setShowModal(!showModal());
                    }}
                    class="btn btn-secondary mr-2"
                  >
                    cancel
                  </button>
                  <button
                    onClick={async (e) => {
                      await handleMobileCloudDelete(e, props.id);
                    }}
                    class="btn btn-primary"
                  >
                    Delete
                  </button>
                </div>
                <div class="container flex items-center justify-center  mx-auto p-3 text-format"></div>
              </div>
            </div>
          </div> */}
          <MobileCloudDeleteModal
            name={props.name}
            done={props.onDone}
            handleMobileCloudDelete={async () => {
              await handleMobileCloudDelete(props.id);
            }}
          />
        </div>
      </Show>
      <div
        class={`flex flex-col px-5 pb-5 pointer-events-none ${
          isDetails || props.isMobile ? "pt-5" : "mobile-card"
        } text-xs ${props.active && "active"}`}
      >
        {!(isDetails || props.isMobile) && (
          <div
            class="mobile-cloud-delete pointer-events-auto"
            onClick={(e) => {
              setShowModal(true);
              setShowModalStr("delete_confirmation");
            }}
          >
            <span>{deleteText}</span>
            <span>X</span>
          </div>
        )}
        <div class="flex items-center gap-x-5">
          <div class="w-[6.5rem] min-w-[6.5rem]  h-full min-h-full bg-red-500 ">
            {isImage ? (
              <img
                src={`data:image/png;base64,${props.app_media}`}
                alt="mobile-image"
                class="object-cover"
              />
            ) : (
              <img
                src={
                  defaultMobileCloudResourceAsset.includes(props.name)
                    ? `/codefend/${props.name}.jpg`
                    : `/clouds/${
                        isMobileScreen
                          ? "android-ios.jpeg"
                          : `${
                              props.cloud_provider
                                ? `${props.cloud_provider}.png`
                                : "aws.png"
                            }`
                      }`
                }
                alt="mobile-image"
                class="object-cover h-full"
              />
            )}
          </div>
          <div class="flex-grow flex flex-col">
            <div class="flex items-center uppercase font-bold gap-x-1">
              <span
                class={`uppercase font-bold ${
                  isDetails ? "text-red-500" : "text-black"
                }`}
              >
                {isMainGoogleNetwork ? "main google network" : props.name}
              </span>

              {isDetails && (
                <span class="pl-1 border-l  border-black text-black ">
                  resource id: {props.id}
                </span>
              )}
            </div>
            {isMainGoogleNetwork ? (
              <div class="flex flex-col mt-5 gap-y-1 text-gray">
                <span>
                  This is our main GCP network. Please handle with care.
                </span>
              </div>
            ) : (
              <div class="flex flex-col mt-5 gap-y-1 text-gray">
                <span
                  class={`max-h-12 overflow-hidden text-[14px] leading-5 ${
                    props.isMobile ? "max-h-14 line-clamp-3" : "line-clamp-2"
                  }`}
                >
                  {props.app_desc ?? ""}
                </span>
                {!props.isMobile && (
                  <>
                    <span>{props.app_developer ?? ""}</span>
                    <div class="flex items-center gap-x-1">
                      <span>{props.app_rank ?? ""}</span>
                      {props.app_reviews && <span>•</span>}
                      <span>
                        {" "}
                        {props.app_reviews
                          ? `${props.app_reviews} reviews`
                          : ""}
                      </span>
                      {isMobileScreen && (
                        <div class="">
                          <img src="/codefend/rank.svg" alt="star-icon" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileAppCard;
