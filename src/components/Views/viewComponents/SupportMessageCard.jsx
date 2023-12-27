import { formatDate, isUserChat } from "../../../utils/helper";

const SupportMessageCard = (props) => {
  const isAuthUserChat = isUserChat(props.user_id);
  const title = `${isAuthUserChat ? "You" : "The operator"} ${
    props.user_username ? `@${props.user_username}` : ""
  } wrote on ${formatDate(props.creacion)}`;
  const message = props.cs_body ?? "";

  return (
    <>
      <div class="flex flex-col">
        <span class="pt-4 pb-3 px-4 border-b">{title}</span>
        <div class="flex flex-row items-center gap-x-8 p-6 tt">
          <div class="rounded-full">
            <img
              src={`/codefend/user-icon${isAuthUserChat ? "-gray" : ""}.svg`}
              class="w-10 h-10"
              alt="user-picture"
            />
          </div>
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};

export default SupportMessageCard;
