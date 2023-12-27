//Core packages
import { createSignal } from "solid-js";
import { FaSolidGlobe } from "solid-icons/fa";
import createModal from "../../../Store/modal.jsx";
import toast from "solid-toast";
import { SocialsServices } from "../../../Services/ApiHandlerV2/socials.handler.js";
import ButtonLoader from "../../ButtonLoader/buttonLoader.jsx";

function MobileAppModal(props) {
  const { showModal, setShowModal } = createModal;

  const [socialFName, setSocialFName] = createSignal("");
  const [socialLName, setSocialLName] = createSignal("");
  const [socialMail, setSocialMail] = createSignal("");
  const [socialPhone, setSocialPhone] = createSignal("");
  const [socialRole, setSocialRole] = createSignal("");
  const [isAddingSocialMember, setIsAddingSocialMember] = createSignal(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsAddingSocialMember(true);

    if (
      !socialFName() ||
      socialFName().length == 0 ||
      socialFName().length > 40
    ) {
      toast.error("Invalid name");
      return setIsAddingSocialMember(false);
    }

    if (
      !socialLName() ||
      socialLName().length == 0 ||
      socialLName().length > 40
    ) {
      toast.error("Invalid name");
      return setIsAddingSocialMember(false);
    }

    let regexMail = /^[\w.-]+@([\w-]+\.)+[\w-]{2,10}$/;
    if (
      !socialMail() ||
      socialMail().length === 0 ||
      !regexMail.test(socialMail())
    ) {
      toast.error("Invalid email");
      return setIsAddingSocialMember(false);
    }

    if (
      !socialPhone() ||
      socialPhone().length == 0 ||
      socialPhone().length > 20
    ) {
      toast.error("Invalid phone");
      return setIsAddingSocialMember(false);
    }

    if (!socialRole()) {
      toast.error("Invalid role");
      return setIsAddingSocialMember(false);
    }

    const requestParams = {
      member_fname: socialFName(),
      member_lname: socialLName(),
      member_email: socialMail(),
      member_phone: socialPhone(),
      member_role: socialRole(),
    };

    SocialsServices.add(requestParams)
      .then(() => {
        props.onDone();
        setShowModal(!showModal());
        toast.success("Successfully Added Member...");
      })
      .finally(() => {
        setIsAddingSocialMember(false);
      });
  };

  return (
    <>
      <div class="container flex items-center justify-center  mx-auto p-3 text-format">
        <form onSubmit={handleSubmit} class="p-6">
          <div class="relative flex items-center w-96">
            <span class="absolute">
              <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red" />
            </span>

            <input
              type="text"
              onChange={(e) => {
                setSocialFName(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300"
              placeholder="first name"
              required
            />
          </div>

          <div class="relative flex items-center mt-4 w-96">
            <span class="absolute">
              <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red" />
            </span>

            <input
              type="text"
              onChange={(e) => {
                setSocialLName(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300"
              placeholder="last name"
              required
            />
          </div>

          <div class="relative flex items-center mt-4 w-96">
            <span class="absolute">
              <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red" />
            </span>

            <input
              type="text"
              onChange={(e) => {
                setSocialMail(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs  focus:outline-none dark:text-gray-300"
              placeholder="email address"
              required
            />
          </div>
          <div class="relative flex items-center mt-4 w-96">
            <span class="absolute">
              <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red" />
            </span>

            <input
              type="text"
              onChange={(e) => {
                setSocialPhone(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs  focus:outline-none dark:text-gray-300"
              placeholder="phone number"
              required
            />
          </div>
          <div class="relative flex items-center w-96 mt-4">
            <span class="absolute">
              <FaSolidGlobe class="w-3 h-3 mx-4 codefend-text-red" />
            </span>

            <select
              onChange={(e) => {
                setSocialRole(e.target.value);
              }}
              class="block w-full py-3 bg-white border px-11 log-inputs focus:outline-none dark:text-gray-300 modal_info"
              required
            >
              <option value="" disabled selected>
                role
              </option>
              <option value="admin">administrative</option>
              <option value="human">human resources</option>
              <option value="info">information tech</option>
              <option value="ads">marketing</option>
              <option value="sales">sales</option>
              <option value="finance">finance</option>
              <option value="cs">customer service</option>
              <option value="prod">production & ops</option>
              <option value="plan">strategy & planning</option>
            </select>
          </div>
          <div class="mt-6 flex">
            <button
              type="button"
              disabled={isAddingSocialMember()}
              onClick={() => {
                setShowModal(!showModal());
              }}
              class="log-inputs text-gray focus:outline-none w-2/6 px-4 mr-2 py-3 text-sm tracking-wide text-white transition-colors duration-300 codefend_secondary_ac"
            >
              cancel
            </button>
            <button
              type="submit"
              disabled={isAddingSocialMember()}
              class="log-inputs flex flex-row items-center gap-x-2 text-white focus:outline-none bg-codefend px-6 w-4/6 py-3 text-sm tracking-wide text-white transition-colors duration-300 codefend_main_ac"
            >
              {isAddingSocialMember() && <ButtonLoader />}
              add repository
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default MobileAppModal;
