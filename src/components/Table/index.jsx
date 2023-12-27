import {
  createSolidTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
} from "@tanstack/solid-table";

import "./table.scss";
import { createEffect, createSignal, onCleanup } from "solid-js";

const Table = (props) => {
  const [hideFields, setHideFields] = createSignal(false);
  const [sorting, setSorting] = createSignal([]);

  const table = createSolidTable({
    get data() {
      return props.data();
    },
    get columns() {
      return props.columns;
    },
    state: {
      get sorting() {
        return sorting();
      },
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableMultiSort: true,
  });

  const triggerFieldsVisibility = (fieldsHide) => {
    if (!props.fieldsToHideOnMobile || props.fieldsToHideOnMobile.length === 0)
      return;
    const fields = table.getAllLeafColumns();
    const fieldsToHide = fields.filter((field) =>
      props.fieldsToHideOnMobile.includes(field.id)
    );
    if (fieldsHide) {
      fieldsToHide.forEach((field) => {
        field.toggleVisibility();
      });
    } else {
      fieldsToHide.forEach((field) => {
        field.getIsVisible() === false && field.toggleVisibility();
      });
    }
  };

  const onHideFields = (event) => {
    let currentHideNav = window.innerWidth <= 760;
    if (currentHideNav && !hideFields()) {
      setHideFields(currentHideNav);
      triggerFieldsVisibility(true);
    } else if (!currentHideNav) {
      if (hideFields()) {
        setHideFields(false);
        triggerFieldsVisibility(false);
      }
    }
  };

  createEffect(() => {
    window.addEventListener("resize", onHideFields);

    onCleanup(() => {
      window.removeEventListener("resize", onHideFields);
    });
  }, []);

  createEffect(() => {
    if (props.sortBy() && props.selectedNow()) {
      console.log("called inside effect");
      const headerGroups = table.getHeaderGroups();
      const headers = headerGroups.map((headerGroup) => headerGroup.headers);
      const selectedSortField = headers[0].find(
        (header) => header.id === props.sortBy()
      );
      props.setSelectedNow(false);
      selectedSortField.column.toggleSorting();
    }
  }, []);

  return (
    <div
      style={{
        height: props.maxHeight ?? "100%",
        maxHeight: props.maxHeight ?? "100%",
        maxWidth: "100%",
        // overflow: "hidden",
      }}
      class="table-wrapper"
    >
      <div class="table-title-header">{props.children}</div>
      <div class="overflow-auto h-full">
        <table class="w-full ">
          <thead>
            <For each={table.getHeaderGroups()}>
              {(headerGroup) => (
                <tr>
                  <For each={headerGroup.headers}>
                    {(header) => (
                      <th>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    )}
                  </For>
                </tr>
              )}
            </For>
          </thead>
          <tbody>
            <For each={table.getRowModel().rows}>
              {(row) => (
                <tr>
                  <For each={row.getVisibleCells()}>
                    {(cell) => (
                      <td>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    )}
                  </For>
                </tr>
              )}
            </For>
          </tbody>
          {/* <tfoot>
          <For each={table.getFooterGroups()}>
            {(footerGroup) => (
              <tr>
                <For each={footerGroup.headers}>
                  {(header) => (
                    <th>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext()
                          )}
                    </th>
                  )}
                </For>
              </tr>
            )}
          </For>
        </tfoot> */}
        </table>
      </div>
    </div>
  );
};

export default Table;
