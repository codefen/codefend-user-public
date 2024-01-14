//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";

//Components
import AdminCompanyPanel from "./viewComponents/adminCompanyPanel.jsx";
import AdminCompanyDetails from "./viewComponents/adminCompanyDetails.jsx";

function MainView() {
  const [showScreen, setShowScreen] = createSignal(false);

  createEffect(() => {
    setTimeout(() => {
      setShowScreen(true);
    }, 50);
  });

  return (
    <>
      <main class={`webapp ${showScreen() ? "actived" : ""}`}>
        <section class="w-8/12 pr-2">
          <div class="pb-[20px] title title-format h-16">
            Admin Company Panel
          </div>
          <AdminCompanyPanel />
        </section>
        <section class="w-4/12 pl-2">
          <div class="mt-16 pb-9 title title-format h-16">
            <AdminCompanyDetails />
          </div>
        </section>
      </main>
    </>
  );
}

export default MainView;
