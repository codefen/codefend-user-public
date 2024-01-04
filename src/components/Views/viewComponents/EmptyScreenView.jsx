import { TbLoader } from "solid-icons/tb";

const EmptyScreenView = (props) => {
  const title = props.title ?? "There's no data to display here";
  const info = props.info ?? "Start by clicking on the button below";

  const buttonText = props.buttonText ?? "Add";

  return (
    <div class="flex h-full w-full items-center justify-center">
      <div class="flex items-center empty-card">
        <div class="flex flex-col items-center flex-grow contents-wrapper gap-y-6">
          <div class="flex flex-col items-center gap-y-1">
            <span class="first-text text-2xl text-center">{title}</span>
            <span class="second-text inline-block text-center text-lg">
              {info}
            </span>
          </div>
          <div class="w-[40%] ">
            <button
              onClick={() => {
                props.onButtonClick?.();
              }}
              class="btn btn-primary w-full "
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyScreenView;
