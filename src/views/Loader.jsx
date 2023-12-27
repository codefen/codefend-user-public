import { TbLoader, TbLoader3 } from "solid-icons/tb";

function Loader() {
  return (
    <div
      class={`w-screen h-screen  flex items-center justify-center bg-transparent`}
    >
      <TbLoader class="w-14 h-14 codefend-text-red animate-spin" />
    </div>
  );
}

export default Loader;

export function PageLoader() {
  return (
    <div
      class={`w-full h-full flex items-center justify-center bg-transparent`}
    >
      <TbLoader class="w-10 h-10 codefend-text-red animate-spin" />
    </div>
  );
}
export function PageLoaderWhite() {
  return (
    <div
      class={`w-full h-full flex items-center justify-center bg-transparent`}
    >
      <TbLoader class="w-10 h-10 text-white-0 animate-spin" />
    </div>
  );
}

export function PageLoaderOverlay() {
  return (
    <div
      class={`w-full h-full flex items-center justify-center bg-gray-500/25  absolute left-0 top-0 overflow-hidden z-100`}
    >
      <TbLoader class="w-10 h-10 codefend-text-red animate-spin" />
    </div>
  );
}
