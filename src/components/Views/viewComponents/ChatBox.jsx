import { createEffect, createSignal, onCleanup } from "solid-js";
import {
  CustomerSupportServices,
  IssuesServices,
} from "../../../Services/ApiHandlerV2";
import { FaSolidMessage } from "solid-icons/fa";
import { FiSend } from "solid-icons/fi";

const ChatBox = (props) => {
  const [message, setMessage] = createSignal("");
  const [isAdding, setIsAdding] = createSignal(false);
  let textAreaRef;

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsAdding(true);

    if (props.type === "issue") {
      const requestParams = {
        issue_cs_body: message(),
        issue_id: props.selectedId,
      };
      IssuesServices.addCSMessage(requestParams)
        .then(() => {
          setMessage("");
          props.onDone();
        })
        .finally(() => {
          setIsAdding(false);
        });
      return;
    }

    const requestParams = {
      cs_body: message(),
      dad_id: props.selectedId,
    };

    CustomerSupportServices.add(requestParams)
      .then(() => {
        setMessage("");
        props.onDone();
      })
      .finally(() => {
        setIsAdding(false);
      });
  };

  createEffect(() => {
    if (!textAreaRef) return;

    const handleEnter = (e) => {
      if (!Boolean(e.target.value.trim())) return;
      if (e.key === "Enter") {
        e.preventDefault();
        setIsAdding(true);

        if (props.type === "issue") {
          const requestParams = {
            issue_cs_body: e.target.value.trim(),
            issue_id: props.selectedId,
          };
          IssuesServices.addCSMessage(requestParams)
            .then(() => {
              e.target.value = "";
              props.onDone();
            })
            .finally(() => {
              setIsAdding(false);
            });
          return;
        }

        const requestParams = {
          cs_body: e.target.value.trim(),
          dad_id: props.selectedId,
        };

        CustomerSupportServices.add(requestParams)
          .then(() => {
            e.target.value = "";
            props.onDone();
          })
          .finally(() => {
            setIsAdding(false);
          });
      }
    };

    textAreaRef.addEventListener("keypress", handleEnter);

    onCleanup(() => {
      textAreaRef.removeEventListener("keypress", handleEnter);
    });
  }, []);

  return (
    <div class="sender">
      <div class="header">
        <div class="title">
          <div class="icon">
            <FaSolidMessage />
          </div>
          <span>Add new entry</span>
        </div>
        <button
          disabled={isAdding() || !message()}
          onClick={(e) => {
            handleSubmit(e);
          }}
          class="btn btn-primary no-border-height w-14 h-full items-center justify-center"
        >
          <FiSend />
        </button>
      </div>

      <div class="flex h-36 py-8 gap-x-9 px-6">
        <div class="flex text-format  h-10 w-10  no-border-bottom">
          <img
            src="/codefend/user-icon-gray.svg"
            alt="user-picture"
          />
        </div>
        <div class="no-border-bottom flex-grow">
          <textarea
            ref={textAreaRef}
            value={message()}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="add a new comment here..."
            name="textArea"
            class="w-full h-full outline-none bg-transparent resize-none"
            required
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
