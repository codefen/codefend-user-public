//Core packages
import { createResource, createSignal, createEffect } from "solid-js";
import { FaSolidMagnifyingGlass } from "solid-icons/fa";

//Components
import DashboardVulnerabilities from "./viewComponents/dashboardVulnerabilities.jsx";
import DashboardChart from "./viewComponents/dashboardChart.jsx";
import DashboardVulnerabilitiesStatus from "./viewComponents/dashboardVulnerabilitiesStatus.jsx";
import DashboardAssets from "./viewComponents/dashboardAssets.jsx";
import DashboardCollaborators from "./viewComponents/dashboardCollaborators.jsx";
import history from "../../history.jsx";

import { CompanyServices } from "../../Services/ApiHandlerV2";

const getCompanyInfo = async () => {
  try {
    const data = await CompanyServices.get();
    return data;
  } catch (error) {
    console.log({ error });
  }
};

function MainView() {
  const [companyInfo] = createResource(getCompanyInfo);
  const [showScreen, setShowScreen] = createSignal(false);
  const [searchValue, setSearchValue] = createSignal("");
  const [searchClass, setSearchClass] = createSignal("");

  createEffect(() => {
    setTimeout(() => {
      setShowScreen(true);
    }, 50);
  });

  const companyInfoData = () => {
    const companyData = companyInfo.loading ? {} : companyInfo();
    return companyData;
  };

  return (
    <>
      <main class={` dashboard ${showScreen() ? "actived" : ""}`}>
        <section class="left">
          <div class="searchs-bar">
            {/* <div class="search-item">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  history.push("/inx?search=" + searchValue());
                }}
                class="flex flex-row h-9 mb-4"
              >
                <input
                  type="text"
                  placeholder="Search in ix"
                  class="w-full h-full"
                  onChange={(e) => setSearchValue(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  class="btn btn-primary no-border-height w-14 items-center justify-center"
                >
                  <FaSolidMagnifyingGlass />
                </button>
              </form>
            </div> */}
            <div class="search-item">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  history.push(
                    "/sns?search=" + searchValue() + "&class=" + searchClass()
                  );
                }}
                class="flex flex-row h-9 mb-4"
              >
                <input
                  onChange={(e) => setSearchValue(e.target.value)}
                  type="text"
                  placeholder="sns"
                  class="px-6 w-full h-full"
                  required
                />

                <label for="states" class="sr-only">
                  class
                </label>
                <select
                  id="states"
                  class="text-sm block w-2xl p-2.5"
                  onChange={(e) => setSearchClass(e.target.value)}
                >
                  <option selected>Choose a class</option>
                  <option value="email">email</option>
                  <option value="username">username</option>
                  <option value="password">password</option>
                  <option value="name">full name</option>
                </select>

                <button
                  type="submit"
                  class="btn btn-primary no-border-height w-14 items-center justify-center"
                >
                  <FaSolidMagnifyingGlass />
                </button>
              </form>
            </div>
          </div>
          <DashboardVulnerabilities
            isLoading={companyInfo.loading}
            topVulnerabilities={companyInfoData().issues ?? []}
          />
          <DashboardAssets resources={companyInfoData().resources ?? {}} />
          <DashboardCollaborators
            isLoading={companyInfo.loading}
            members={companyInfoData().members ?? []}
          />
        </section>
        <section class="right">
          <DashboardChart
            isLoading={companyInfo.loading}
            vulnerabilityByRisk={companyInfoData().issues_share ?? {}}
          />
          <DashboardVulnerabilitiesStatus
            vulnerabilityByShare={companyInfoData().issues_condicion ?? {}}
          />
        </section>
      </main>
    </>
  );
}

export default MainView;
