// //Core packages
// import { For, createSignal } from "solid-js";
// import "/src/flags.css";
// import { FaSolidUsers } from "solid-icons/fa";
// import { PageLoader } from "../../../views/Loader";
// import EmptyCard from "./EmptyCard";
// import { Table } from "@mantine/core";
// import {
//   CollaboratorsColumnDef,
//   defaultCollaboratorsColumnsData,
// } from "../../Table/tableColumnDef";

// function InternalNetworks(props) {
//   const [data, setData] = createSignal(defaultCollaboratorsColumnsData);
//   const [sortBy, setSortBy] = createSignal("");
//   const [selectedNow, setSelectedNow] = createSignal(false);

//   return (
//     //  <div class="card">
//       {/* <div class="header">
//         <div class="title">
//           <div class="icon">
//             <FaSolidUsers />
//           </div>
//           <span>Collaborators and team members</span>
//         </div>
//         <div class="actions"></div>
//       </div>
//       <div class="content table">
//         <div class="columns-name">
//           <div class="id">id</div>
//           <div class="full-name">full name</div>
//           <div class="email">email</div>
//           <div class="phone">phone number</div>
//           <div class="role">role</div>
//         </div>

//         <div class="rows">
//           <Show when={!props.isLoading} fallback={() => <PageLoader />}>
//             <For each={props.members}>
//               {(member) => (
//                 <>
//                   <div class="item">
//                     <div class="id">{member.id}</div>
//                     <div class="full-name">
//                       {member.fname} {member.lname}
//                     </div>
//                     <div class="email">{member.email}</div>
//                     <div class="phone">+{member.phone}</div>
//                     <div class="role">{member.role}</div>
//                   </div>
//                 </>
//               )}
//             </For>
//           </Show>
//           <Show when={!props.isLoading && props.members.length === 0}>
//             <EmptyCard />
//           </Show>
//         </div>
//       </div> */}

//       <div class="h-screen">
//         <Table
//           sortBy={sortBy}
//           selectedNow={selectedNow}
//           setSelectedNow={setSelectedNow}
//           data={data}
//           columns={CollaboratorsColumnDef}
//           fieldsToHideOnMobile={["role", "id"]}
//           maxHeight="30%"
//         >
//           <div class="header">
//             <div class="title">
//               <div class="icon">
//                 <FaSolidUsers />
//               </div>
//               <span>Collaborators and team members</span>
//             </div>
//             <select
//               onChange={(e) => {
//                 console.log({ e });
//                 setSortBy(e.target.value);
//                 setSelectedNow(true);
//               }}
//               class="hidden md:inline bg-transparent ml-10"
//             >
//               <option value="" selected disabled>
//                 Sort by
//               </option>
//               <option value="id">id</option>
//               <option value="role">role</option>
//             </select>
//             <div class="actions"></div>
//           </div>
//         </Table>
//       </div>

//     // </div>
//   );
// }

// export default InternalNetworks;

//Core packages
import { For, createSignal } from "solid-js";
import "/src/flags.css";
import { FaSolidUsers } from "solid-icons/fa";
import { PageLoader } from "../../../views/Loader";
import EmptyCard from "./EmptyCard";
import {
  CollaboratorsColumnDef,
  defaultCollaboratorsColumnsData,
} from "../../Table/tableColumnDef";
import Table from "../../Table";

function InternalNetworks(props) {
  const [sortBy, setSortBy] = createSignal("");
  const [selectedNow, setSelectedNow] = createSignal(false);
  // const [data, setData] = createSignal(props.members ?? []);
  const getMembers = () => props.members;

  // console.log({ seeMembers: getMembers() });
  return (
    <div class="card h-full">
      <div class="h-full overflow-hidden">
        <Show when={!props.isLoading} fallback={() => <PageLoader />}>
          <Table
            sortBy={sortBy}
            selectedNow={selectedNow}
            setSelectedNow={setSelectedNow}
            data={getMembers}
            columns={CollaboratorsColumnDef}
            fieldsToHideOnMobile={["role", "id"]}
            maxHeight="42%"
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
        </Show>
      </div>
    </div>
  );
}

export default InternalNetworks;
