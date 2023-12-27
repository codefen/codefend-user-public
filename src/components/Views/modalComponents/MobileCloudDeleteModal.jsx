import createModal from "../../../Store/modal";

const MobileCloudDeleteModal = (props) => {
  const { setShowModal, showModal } = createModal;
  console.log({ doneTo: props.done });

  return (
    <div
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
                await props.handleMobileCloudDelete();
              }}
              class="btn btn-primary"
            >
              Delete
            </button>
          </div>
          <div class="container flex items-center justify-center  mx-auto p-3 text-format"></div>
        </div>
      </div>
    </div>
  );
};

export default MobileCloudDeleteModal;
