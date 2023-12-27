//Core packages
import { createSignal, For } from "solid-js";
import "/src/flags.css";
import { defaultCompanyInfo } from "../../../constantData";

function SettingCompanyInformation(props) {
  const [companyInfo, setCompanyInfo] = createSignal(defaultCompanyInfo);

  console.log({ info: props.companyInfo });

  const getCompanyData = () => {
    const info = props.companyInfo;

    return {
      name: info.name,
      web: info.web,
      mercado: info.mercado,
      owner: `${info.owner_fname} ${info.owner_lname}`,
      email: info.owner_email,
      location: info.pais_provincia,
      address: `${info.address === "non available" ? "-" : info.address}`,
    };
  };

  return (
    <>
      <div class="w-full internal-tables">
        <div class="py-3 px-5 internal-tables-active flex flex-row items-center gap-x-6 ">
          <p class="text-small text-left font-bold title-format">
            COMPANY INFORMATION
          </p>
          <p class="text-small text-left font-bold title-format border-x-[1.5px]  title-format px-6 underline cursor-pointer codefend-text-red">
            UPDATE
          </p>
        </div>
        <div class="flex px-8 py-2">
          <div class="w-full">
            {/* <div class="flex p-3 text-format">
              <section class="flex w-full">
                <p class="text-base w-2/4">name</p>
                <p class="text-base w-2/4">hemsleek</p>
              </section>
            </div> */}

            <For each={Object.entries(getCompanyData())}>
              {(data) => (
                <div class="flex px-3 py-1 text-format">
                  <section class="flex w-full items-center">
                    <p class="w-2/4">{data[0]}</p>
                    <p class="text-base w-2/4">{data[1]}</p>
                  </section>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    </>
  );
}

export default SettingCompanyInformation;
