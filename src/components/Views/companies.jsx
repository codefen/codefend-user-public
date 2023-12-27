//Core packages
import { createSignal, createEffect } from "solid-js";

//Components
import CompaniesList from "./viewComponents/CompaniesList.jsx";

function MainView() {
  const [showScreen, setShowScreen] = createSignal(false);

  createEffect(() => {
    setTimeout(() => {
      setShowScreen(true);
    }, 50);
  });

  return (
    <>
      <main class={`issues-list ${ showScreen() ? "actived" : "" }`}>
        <section class="w-8/12 pr-2">
          <CompaniesList/>
        </section>
        <section class="w-4/12 pl-2">
        </section>
      </main>
    </>
  );
}

export default MainView;
