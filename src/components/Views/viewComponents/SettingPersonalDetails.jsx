//Core packages
import { createResource, createSignal, For, Show } from "solid-js";
import "/src/flags.css";
import { FaRegularCircleUser } from "solid-icons/fa";
import { defaultPersonalDetails } from "../../../constantData";
import createUser from "../../../Store/user";
import { CompanyServices } from "../../../Services/ApiHandlerV2";

const { user } = createUser;

const getCompanyInfo = async (companyId) => {
  try {
    const data = await CompanyServices.get(companyId);
    return data;
  } catch (error) {
    console.log({ error });
  }
};

function SettingPersonalDetails() {
  const [personalDetails, setPersonalDetails] = createSignal(
    defaultPersonalDetails
  );

  const [companyInfo] = createResource(user().company_id, getCompanyInfo);

  const userInfo = () => {
    const _user = user();
    return {
      email: _user.email,
      firstname: _user.fname,
      lastname: _user.lname,
      phone: _user.phoneNumber,
      role: _user.role,
      photo_media: _user.photo_media,
    };
  };

  const printInfo = () => {
    console.log({ info: companyInfo() });
  };

  return (
    <>
      <div class=" personal-details w-full internal-tables mt-6 ">
        <div class="py-3 px-5 internal-tables-active flex flex-row items-center gap-x-6 ">
          <p class="text-small text-left font-bold title-format">
            YOUR PERSONAL DETAILS
          </p>
          <p class="text-small text-left font-bold title-format border-x-[1.5px]  px-6 underline cursor-pointer title-format codefend-text-red">
            UPDATE
          </p>
        </div>
        <div class="flex flex-row gap-x-7 items-center px-8 py-2">
          {/* <section class="flex  mb-20">
            <Show
              when={userInfo().photo_media}
              fallback={() => (
                <img
                  src="/codefend/user-icon-gray.svg"
                  class="w-16 h-16"
                  alt="default-profile-icon"
                />
              )}
            >
              <div class="w-16 h-16 rounded-full profile-picture-wrapper">
                <img
                  src={userInfo.photo_media ?? ""}
                  alt="profile-picture"
                  class=" rounded-full overflow-hidden"
                />
              </div>
            </Show>
          </section> */}
          <div class="w-full mb-20">
            <For each={personalDetails()}>
              {(detail) => (
                <div class="flex px-3 py-1 text-format">
                  <section class="flex w-full items-center">
                    <p class="w-1/2">{detail.title}</p>
                    <p class="text-base w-1/2">{userInfo()[detail.title]}</p>
                  </section>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingPersonalDetails;
