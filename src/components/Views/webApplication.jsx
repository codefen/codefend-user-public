//Core packages
import { createResource, createSignal, createEffect } from "solid-js";

//Components
import WebApplication from "./viewComponents/webApplication.jsx";
import WebApplicationLocation from "./viewComponents/webApplicationLocation.jsx";
import WebApplicationStatics from "./viewComponents/webApplicationStatics.jsx";
import WebApplicationCredentials from "./viewComponents/webApplicationCredentials.jsx";
import { WebResources } from "../../Services/ApiHandlerV2";

const getWebResources = async () => {
  try {
    const data = await WebResources.get();

    return data;
  } catch (error) {}
};

function MainView() {
  const [webResources, { refetch }] = createResource(getWebResources);
  const [showScreen, setShowScreen] = createSignal(false);

  createEffect(() => {
    setTimeout(() => {
      setShowScreen(true);
    }, 50);
  });

  return (
    <>
      <main class={`webapp ${showScreen() ? "actived" : ""}`}>
        <section class="left">
          <WebApplication
            webResources={webResources}
            refetchResources={refetch}
          />
        </section>
        <section class="right">
          <WebApplicationLocation webResources={webResources} />
          <WebApplicationStatics webResources={webResources} />
          <WebApplicationCredentials webResources={webResources} />
        </section>
      </main>
    </>
  );
}

export default MainView;
