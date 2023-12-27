//Core packages
import { createSignal, createEffect, createResource, Show } from "solid-js";

//Components
import SettingOrderAndBilling from "./viewComponents/SettingOrderAndBilling.jsx";
import SettingCollaboratorAndTeam from "./viewComponents/SettingCollaboratorAndTeam.jsx";
import SettingCompanyInformation from "./viewComponents/SettingCompanyInformation.jsx";
import SettingPersonalDetails from "./viewComponents/SettingPersonalDetails.jsx";
import { PreferencesService } from "../../Services/ApiHandlerV2/preferences.handler.js";
import { PageLoader } from "../../views/Loader.jsx";

const getPreferences = async () => {
  try {
    const data = await PreferencesService.getAll();

    return data;
  } catch (error) {}
};

function MainView() {
  const [preferences, { refetch }] = createResource(getPreferences);
  const [showScreen, setShowScreen] = createSignal(false);

  const preferencesInfoData = () => {
    const preferencesData = preferences.loading ? {} : preferences();
    return preferencesData;
  };

  createEffect(() => {
    setTimeout(() => {
      setShowScreen(true);
    }, 50);
  });

  return (
    <>
      <main class={`preferences ${showScreen() ? "actived" : ""}`}>
        <Show when={!preferences.loading} fallback={() => <PageLoader />}>
          <section class="left">
            <SettingOrderAndBilling
              isLoading={preferences.loading}
              orders={preferencesInfoData()?.company_orders ?? []}
            />
            <SettingCollaboratorAndTeam
              isLoading={preferences.loading}
              members={preferencesInfoData()?.company_members ?? []}
            />
          </section>
          <section class="right">
            <SettingCompanyInformation
              companyInfo={preferencesInfoData()?.company ?? {}}
            />
            <SettingPersonalDetails />
          </section>
        </Show>
      </main>
    </>
  );
}

export default MainView;
