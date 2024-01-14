import { Route, Router, Routes } from "@solidjs/router";
import { Toaster } from "solid-toast";
import { Show, createEffect, onMount } from "solid-js";

// components
import InternalNetworkView from "./views/InternalNetworkView";
import WebApplicationView from "./views/WebApplicationView";
import MobileApplicationView from "./views/MobileApplicationView";
import SourceCodeView from "./views/SourceCodeView";
import SocialView from "./views/SocialView";
import IssuesView from "./views/IssuesView";
import CloudView from "./views/CloudView";
import DashboardView from "./views/DashboardView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import RegisterFinishView from "./views/RegisterFinishView";
import AdminPanelView from "./views/AdminPanelView";
import AdminCompanyView from "./views/AdminCompanyView";
import IssueDetailView from "./views/IssueDetailView";
import PreferencesView from "./views/PreferencesView";
import InxView from "./views/InxView";
import SnsView from "./views/SnsView";
import VdbView from "./views/VdbView";
import EnpView from "./views/EnpView";
import SupportView from "./views/SupportView";
import CompaniesView from "./views/CompaniesView";

import Loader from "./views/Loader";
import createUser from "./Store/user";

const { user } = createUser;

const AppRoutes = () => {
  const isAuthUserAdmin = user().access_role;

  return (
    <Suspense fallback={() => <Loader />}>
      <Router history={history}>
        <Routes>
          <Route path="/" component={DashboardView} />
          <Route path="/auth/signup" component={RegisterView} />
          <Route path="/auth/signin" component={LoginView} />
          <Route path="/dashboard" component={DashboardView} />
          <Route path="/web" component={WebApplicationView} />
          <Route path="/mobile" component={MobileApplicationView} />
          <Route path="/source" component={SourceCodeView} />
          <Route path="/social" component={SocialView} />
          <Route path="/issues" component={IssuesView} />
          <Route path="/cloud" component={CloudView} />
          <Route path="/lan" component={InternalNetworkView} />
          <Route path="/preferences" component={PreferencesView} />
          <Route path="/inx" component={InxView} />
          <Route path="/sns" component={SnsView} />
          <Route path="/vdb" component={VdbView} />
          <Route path="/enp" component={EnpView} />
          <Route path="/companies" component={CompaniesView} />
          <Route path="/support" component={SupportView} />
          <Route path="/issues/:id" component={IssueDetailView} />
          <Route path="/auth/signup/:ref" component={RegisterFinishView} />

          <Show when={isAuthUserAdmin}>
            <Route path="/admin/panel" component={AdminPanelView} />
            <Route path="/admin/company" component={AdminCompanyView} />
          </Show>
        </Routes>
      </Router>
      <Toaster
        position="top-right"
        gutter={8}
        toastOptions={{
          style: { minWidth: "40%" },
        }}
      />
    </Suspense>
  );
};

export default AppRoutes;
