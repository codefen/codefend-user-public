//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";

//Components
import AdminPanelApprove from "./viewComponents/adminPanelApprove.jsx";

function MainView() {
  return (
    <>
      <main class="pt-12 p-8">
        <section class="w-8/12 pr-2">
          <div class="pb-[20px] title title-format h-16">Admin Panel</div>
          <AdminPanelApprove />
        </section>
        <section class="w-4/12 pl-2">
          <div class="pb-9 title title-format h-16"></div>
        </section>
      </main>
    </>
  );
}

export default MainView;
