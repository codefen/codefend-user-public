import ModalWrapper from "../modalComponents/ModalWrapper";
import createModal from "../../../Store/modal";

import { VsWarning } from "solid-icons/vs";

const ErrorConnection = () => {
  const { setShowModal, setShowModalStr } = createModal;

  return (
    <ModalWrapper isErrorBox>
      <div class="bg-white flex flex-col py-5 px-11 error-wrapper">
        <div className="header-wrapper flex items-center gap-x-10 my-10">
          <VsWarning class="codefend-text-red w-14 h-14" />
          <h2 class="font-700 text-3xl text-black uppercase">
            connection error.
          </h2>
        </div>
        <p class="leading-6">
          This application is unable to establish a connection with the
          specified backend server. This may be due to scheduled technical
          maintenance or an issue with your connection. Please consider the
          following steps:
        </p>
        <ol class="my-6 list-decimal ml-4">
          <li>Ensure that your internet connection is functional.</li>
          <li>Review the API connection variables.</li>
        </ol>
        <p class="leading-6">
          Should the issue persist and you require assistance, please contact
          offline@codefend.com.
        </p>
        <p class="mt-6">
          We apologize for any inconvenience this may have caused.
        </p>
        <div class="mt-12 flex justify-end">
          <button
            // type="button"
            // disabled={isDeletingResource()}
            onClick={() => {
              setShowModal(false);
              setShowModalStr(null);
            }}
            class="log-inputs text-gray focus:outline-none w-2/6 px-4 mr-2 py-3 text-sm tracking-wide text-white transition-colors duration-300"
          >
            Try again
          </button>
          <button
            // type="submit"
            // disabled={isDeletingResource()}
            class="log-inputs flex items-center gap-x-2 text-white focus:outline-none bg-codefend px-6 w-2.5/6 py-3 text-sm transition-colors tracking-wide duration-300 font-400 text-"
          >
            {/* {(props.isDeleting || isDeletingResource()) && <ButtonLoader />} */}
            email offline@codefend.com
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ErrorConnection;
