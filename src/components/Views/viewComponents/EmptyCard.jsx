import { TbLoader } from "solid-icons/tb";

const EmptyCard = () => {
  return (
    <div class="flex h-full w-full items-center justify-center">
      <div class="flex items-center empty-card">
        <div class="flex items-center flex-grow contents-wrapper gap-x-5">
          <img
            src="/codefend/not-allowed.svg"
            alt="not-allowed-icon"
            class="w-20 h-20"
          />
          <div class="flex flex-col gap-y-2">
            <span class="first-text">There's no data to display here.</span>
            <span class="second-text">
              If you just placed an order please allow our team to work<br/>
              for a few hours before getting the first results.<a class="codefend-text-red" href="mailto:cs@codefend.com" target="_blank"> Send email.</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCard;
