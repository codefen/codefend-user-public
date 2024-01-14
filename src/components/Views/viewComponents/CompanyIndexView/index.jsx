import { For, createEffect, createSignal } from "solid-js";
import createCompany from "../../../../Store/company";
import CompanyCard from "./CompanyCard";
import { TbArrowBigRight } from "solid-icons/tb";

import { defaultCompanyCardData } from "../../../../constantData";

import "./CompanyIndexView.scss";

const CompanyIndexView = () => {
  const [companies, setCompanies] = createSignal(defaultCompanyCardData);
  const [searchQuery, setSearchQuery] = createSignal("");
  const { companyStore, setCompanyStore } = createCompany;

  const companiesToRender = () => {
    if (searchQuery().trim() === "" || searchQuery().trim().length < 2)
      return companies();
    const _companies = companies();
    const query = searchQuery();
    console.log("hereeeee");
    return _companies.filter((company) =>
      company.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  const isSelectedCompany = (company) => {
    if (!company || !company?.id) return false;

    const selected = companyStore()?.id === company?.id;
    console.log({ selected });
    return selected;
  };

  // createEffect(() => {
  //   ApiHandler.getPanelCompanies().then((res) => {
  //     setCompanies(res.data);
  //   });
  // }, []);

  return (
    <div class="CompanyIndexView">
      {Boolean(companies().length) && (
        <div className="company-search relative">
          <input
            type="text"
            value={searchQuery()}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Company"
            class="text w-full"
            required
          />
          <div class="h-full flex  items-center absolute right-5">
            <TbArrowBigRight class="text-[#ff3939] w-8 h-8" />
          </div>
        </div>
      )}
      <div className="companies">
        <For each={companiesToRender()}>
          {(company) => (
            <div
              onClick={() => {
                if (isSelectedCompany(company)) {
                  setCompanyStore(null);
                  return;
                }
                setCompanyStore(company);
              }}
              key={company.id}
              class={`company ${isSelectedCompany(company) ? "selected" : ""} `}
            >
              <CompanyCard
                {...company}
                isSelected={isSelectedCompany(company)}
              />
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default CompanyIndexView;
