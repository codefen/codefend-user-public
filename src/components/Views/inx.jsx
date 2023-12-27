//Core packages
import { createSignal, createEffect, createResource } from "solid-js";

//Components
import InxPreviousSearches from "./viewComponents/InxPreviousSearches.jsx";
import InxSearchAndData from "./viewComponents/InxSearchAndData.jsx";
import { InxServices } from "../../Services/ApiHandlerV2/inx.handler.js";

const getInxPreviousSearch = async () => {
  try {
    const data = await InxServices.getPreviousSearches();
    return data;
  } catch (error) {
    console.log({ error });
  }
};

function MainView() {
  const [showScreen, setShowScreen] = createSignal(false);
  const [previousSearches, { refetch }] = createResource(getInxPreviousSearch);

  const previousSearchesData = () => {
    const previousSearchesInfo = previousSearches.loading
      ? {}
      : previousSearches();
    return previousSearchesInfo;
  };

  createEffect(() => {
    setTimeout(() => {
      setShowScreen(true);
    }, 50);
  });

  return (
    <>
      <main class={`issues-list ${showScreen() ? "actived" : ""}`}>
        <section class="w-8/12 pr-2">
          <InxSearchAndData refetchPreviousSearches={refetch} />
        </section>
        <section class="w-4/12 pl-2">
          <InxPreviousSearches
            isLoading={previousSearches.loading}
            refetchPreviousSearches={refetch}
            previousSearches={previousSearchesData().previous_searches ?? []}
          />
        </section>
      </main>
    </>
  );
}

export default MainView;
