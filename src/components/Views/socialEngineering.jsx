//Core packages
import {
  createSignal,
  createEffect,
  Show,
  For,
  createResource,
} from "solid-js";

import { createStore } from "solid-js/store";

//Components
import SocialEngineering from "./viewComponents/socialEngineering.jsx";
import { SocialsServices } from "../../Services/ApiHandlerV2/socials.handler.js";
import SocialEngineeringMembers from "./viewComponents/socialEngineeringMembers.jsx";
import SocialAttackVectors from "./viewComponents/SocialAttackVectors.jsx";
import { computedRoles } from "../../utils/helper.js";

const fetchSocial = async () => {
  try {
    const data = await SocialsServices.getAll();
    return data;
  } catch (error) {
    console.log({ error });
  }
};

function SocialEngineeringView() {
  const [social, { refetch }] = createResource(fetchSocial);
  const [socialFilters, setSocialFilters] = createStore({
    department: {},
    attackVectors: {},
  });

  const [showScreen, setShowScreen] = createSignal(false);

  createEffect(() => {
    setTimeout(() => {
      setShowScreen(true);
    }, 50);
  });

  const socialInfoData = () => {
    const socialData = social.loading ? {} : social();
    console.log(socialData);
    return socialData ?? {};
  };

  const handleFilter = () => {
    const filterArray = Object.entries({ ...socialFilters.department });
    if (filterArray.length === 0) return {};

    const selectedFilters = filterArray.reduce((acc, item) => {
      if (item[1]) acc.push(item[0].toLowerCase());
      return acc;
    }, []);

    const socialDataList = socialInfoData()?.disponibles
      ? socialInfoData().disponibles
      : [];

    const filteredData = socialDataList.filter((datum) =>
      selectedFilters.includes(datum.member_role.toLowerCase())
    );

    return { filteredData, isFiltered: selectedFilters.length !== 0 };
  };

  return (
    <>
      <main class={`social ${showScreen() ? "actived" : ""}`}>
        <section class="left">
          <SocialEngineering
            refetch={refetch}
            isLoading={social.loading}
            socials={
              handleFilter().isFiltered
                ? handleFilter().filteredData
                : socialInfoData()?.disponibles ?? []
            }
          />
        </section>
        <section class="right">
          <SocialEngineeringMembers
            isLoading={social.loading}
            members={computedRoles(socialInfoData()?.disponibles) ?? {}}
            setSocialFilters={setSocialFilters}
          />
          <SocialAttackVectors />
        </section>
      </main>
    </>
  );
}

export default SocialEngineeringView;
