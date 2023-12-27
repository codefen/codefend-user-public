//Core packages
import {
  createSignal,
  createEffect,
  Show,
  For,
  createResource,
} from "solid-js";

//Components
import SourceCode from "./viewComponents/sourceCode.jsx";
import SourceCodeCollab from "./viewComponents/sourceCodeCollab.jsx";
import SourceCodeChart from "./viewComponents/SourceCodeChart.jsx";

import { SourceCodeServices } from "../../Services/ApiHandlerV2";

const getSourceCodeData = async () => {
  try {
    const data = await SourceCodeServices.getAll();
    return data;
  } catch (error) {
    console.log({ error });
  }
};

function SourceCodeView() {
  const [sourceCode, { refetch }] = createResource(getSourceCodeData);

  const sourceCodeDataInfo = () => {
    const sourceCodeData = sourceCode.loading ? {} : sourceCode();
    return sourceCodeData;
  };
  const [showScreen, setShowScreen] = createSignal(false);

  createEffect(() => {
    setTimeout(() => {
      setShowScreen(true);
    }, 50);
  });

  return (
    <>
      <main class={`source-code ${showScreen() ? "actived" : ""}`}>
        <section class="left">
          <SourceCode
            isLoading={sourceCode.loading}
            sourceCode={sourceCodeDataInfo().disponibles ?? []}
            refetchSourceCode={refetch}
          />
        </section>
        <section class="right">
          <SourceCodeChart
            isLoading={sourceCode.loading}
            sourceCode={sourceCodeDataInfo().disponibles ?? []}
          />
                    <button
            onClick={(e) => {
              alert("Processing your order");
            }}
            class="btn btn-primary full-w mt-4"
          >
            REQUEST SCAN
          </button>
          <br />
          <SourceCodeCollab />
          {/* <SourceCode /> */}
        </section>
      </main>
    </>
  );
}

export default SourceCodeView;
