//Core packages
import { createSignal, createEffect, Show, For, onMount } from "solid-js";
import { FaSolidMagnifyingGlass } from "solid-icons/fa";

function SourceCodeCollab() {
  return (
    <>
      <div class="card only-info">
        <div class="header">
          <div class="title">
            <div class="icon">
              <FaSolidMagnifyingGlass />
            </div>
            <span>Add our user to your repository</span>
          </div>
        </div>

        <div class="content">
          <div class="info">
          <p>
            In order to review the source code in your company private
            repositories we will need contributor access. Please add the
            following user: 
            <a class="cursor-pointer codefend-text-red underline">
              sourcecode@codefend.com
            </a>
          </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SourceCodeCollab;
