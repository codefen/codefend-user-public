//Core packages
import { createSignal, createEffect, createResource } from "solid-js";

//Components
import SbSearchAndData from "./viewComponents/SbSearchAndData.jsx";
import SnPreviousSearches from "./viewComponents/SnPreviousSearches.jsx";


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
      <main class={`sb ${ showScreen() ? "actived" : "" }`}>
        <section class="left">
          <SbSearchAndData />
        </section>
        <section class="right">
          <SnPreviousSearches
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
