//Core packages
import { createSignal, createEffect, Show, For } from "solid-js";
import history from "../../history.jsx";
import {
  FaSolidGlobe,
  FaSolidChartSimple,
  FaSolidMobileScreen,
  FaSolidCloud,
  FaSolidServer,
  FaSolidCode,
  FaSolidPeopleGroup,
  FaSolidBug,
  FaSolidMessage,
  FaSolidGear,
  FaRegularSquarePlus,
  FaRegularBuilding,
  FaSolidDatabase,
  FaSolidSdCard,
} from "solid-icons/fa";
import { SiPowerautomate } from "solid-icons/si";
import createUser from "../../Store/user.jsx";
import { isUserAdmin } from "../../utils/helper.js";

const isActiveLinkColor = (path) => {
  const pathName = history.location.pathname;
  const sideTabActiveColor = "active";
  if (pathName === "/" && path === "/dashboard") return sideTabActiveColor;
  // console.log({ path, pathName });
  const isActivePath = pathName.startsWith(path);
  return isActivePath ? sideTabActiveColor : "";
};

function Sidebar() {
  const { user } = createUser;
  // console.log(user());
  return (
    <>
      <aside class="sidebar">
        <Show when={user() && isUserAdmin(user())}>
          <a
            title="Admin Company"
            href="/admin/company"
            class={isActiveLinkColor("/admin/company")}
            onClick={() => {
              history.push("/admin/company");
            }}
          >
            <FaRegularBuilding />
          </a>
          <a
            title="Admin Panel"
            href="/admin/panel"
            class={isActiveLinkColor("/admin/panel")}
            onClick={() => {
              history.push("/admin/panel");
            }}
          >
            <FaRegularSquarePlus />
          </a>
        </Show>
        <a
          title="Dashboard"
          href="/dashboard"
          class={isActiveLinkColor("/dashboard")}
          onClick={() => {
            history.push("/dashboard");
          }}
        >
          <FaSolidChartSimple />
        </a>

        <a
          title="web"
          href="/web"
          class={isActiveLinkColor("/web")}
          onClick={() => {
            history.push("/web");
          }}
        >
          <FaSolidGlobe />
        </a>

        <a
          title="mobile"
          href="/mobile"
          class={isActiveLinkColor("/mobile")}
          onClick={() => {
            history.push("/mobile");
          }}
        >
          <FaSolidMobileScreen />
        </a>

        <a
          title="cloud"
          href="/cloud"
          class={isActiveLinkColor("/cloud")}
          onClick={() => {
            history.push("/cloud");
          }}
        >
          <FaSolidCloud />
        </a>

        <a
          title="lan"
          href="/lan"
          class={isActiveLinkColor("/lan")}
          onClick={() => {
            history.push("/lan");
          }}
        >
          <FaSolidServer />
        </a>
        <a
          title="enp"
          href="/enp"
          class={isActiveLinkColor("/enp")}
          onClick={() => {
            history.push("/enp");
          }}
        >
          <FaSolidSdCard />
        </a>

        <a
          title="Source Code"
          href="/source"
          class={isActiveLinkColor("/source")}
          onClick={() => {
            history.push("/source");
          }}
        >
          <FaSolidCode />
        </a>

        <a
          title="Social Engineering"
          href="/social"
          class={isActiveLinkColor("/social")}
          onClick={() => {
            history.push("/social");
          }}
        >
          <FaSolidPeopleGroup />
        </a>

        <a
          title="Issues"
          href="/issues"
          class={isActiveLinkColor("/issues")}
          onClick={() => {
            history.push("/issues");
          }}
        >
          <FaSolidBug />
        </a>

        <a
          title="Customer Support"
          href="/support"
          class={isActiveLinkColor("/support")}
          onClick={() => {
            history.push("/support");
          }}
        >
          <FaSolidMessage />
        </a>

        <a
          title="Preferences"
          href="/preferences"
          class={isActiveLinkColor("/preferences")}
          onClick={() => {
            history.push("/preferences");
          }}
        >
          <FaSolidGear />
        </a>
        <a
          title="inx"
          href="/inx"
          class={isActiveLinkColor("/inx")}
          onClick={() => {
            history.push("/inx");
          }}
        >
          <SiPowerautomate />
        </a>
        <a
          title="sns"
          href="/sns"
          class={isActiveLinkColor("/sns")}
          onClick={() => {
            history.push("/sns");
          }}
        >
          <FaSolidDatabase />
        </a>
        <a
          title="vdb"
          href="/vdb"
          class={isActiveLinkColor("/vdb")}
          onClick={() => {
            history.push("/vdb");
          }}
        >
          <FaSolidDatabase />
        </a>
      </aside>
    </>
  );
}

export default Sidebar;
