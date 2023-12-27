///Core packages
import { lazy, createSignal } from "solid-js";
import { Router } from "solid-app-router";
import Table from "../components/Table/index.jsx";
import {
  CollaboratorsColumnDef,
  defaultCollaboratorsColumnsData,
  defaultColumns,
  defaultData,
} from "../components/Table/tableColumnDef.js";
import { FaSolidUsers } from "solid-icons/fa";

//Components
const Dashboard = lazy(() => import("../components/Views/dashboard.jsx"));

function DashboardView() {
  const [data, setData] = createSignal(defaultCollaboratorsColumnsData);
  const [sortBy, setSortBy] = createSignal("");
  const [selectedNow, setSelectedNow] = createSignal(false);
  return (
    <>
      <Router>
        <Dashboard />
      </Router>
      {/* <div class="h-screen mt-20 w-[60%] mx-auto">
        <div class="border">
          <Table
            sortBy={sortBy}
            selectedNow={selectedNow}
            setSelectedNow={setSelectedNow}
            data={data}
            columns={CollaboratorsColumnDef}
            fieldsToHideOnMobile={["role", "id"]}
            maxHeight="30%"
          >
            <div class="header">
              <div class="title">
                <div class="icon">
                  <FaSolidUsers />
                </div>
                <span>Collaborators and team members</span>
              </div>
              <select
                onChange={(e) => {
                  console.log({ e });
                  setSortBy(e.target.value);
                  setSelectedNow(true);
                }}
                class="hidden md:inline bg-transparent ml-10"
              >
                <option value="" selected disabled>
                  Sort by
                </option>
                <option value="id">id</option>
                <option value="role">role</option>
              </select>
              <div class="actions"></div>
            </div>
          </Table>
        </div>
      </div> */}
    </>
  );
}

export default DashboardView;
