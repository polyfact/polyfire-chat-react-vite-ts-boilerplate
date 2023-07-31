import { Checks, DotsThree } from "phosphor-react";
import { ChatProps } from "../Chat/ChatContainer";

import { useEffect } from "react";

import "../Chat/ChatContent/style.css";

interface MessageProps {
  chat: ChatProps[];
  loading: boolean;
}

export function Messages({ chat, loading }: MessageProps) {
  useEffect(() => {
    const chat = document.querySelector(".chat");
    if (chat == null) return;
    chat.scrollTop = chat.scrollHeight;
  }, [chat]);

  return (
    <div className="h-[calc(100%-80px)] my-auto overflow-y-scroll chat">
      {chat.slice(1).map((message) => {
        return (
          <div
            key={message.id}
            className={`${
              message.isUser
                ? "userMessage bg-color_5"
                : "botMessage bg-color_3"
            }  text-sm`}
          >
            <p>{message.message}</p>
            <span
              className={`flex flex-row items-center text-end mr-8 ml-6 pb-2 font-thin text-xs text-[rgba(255,255,255,0.7)] ${
                message.isUser ? "justify-end" : "justify-between"
              }`}
            >
              {!message.isUser && (
                <p className="text-sm font-semibold border-[1px] px-2 rounded-lg bg-[#FFF] text-color_3">
                  Gabriel
                </p>
              )}
              {`${message.createdAt.hour}:${
                message.createdAt.minutes < 10
                  ? `0${message.createdAt.minutes}`
                  : message.createdAt.minutes
              }`}
              {message.isUser && (
                <Checks size={20} weight="fill" className="ml-2" />
              )}
            </span>
          </div>
        );
      })}
      {loading && (
        <div className={"botMessage w-[16%] bg-color_3 text-sm"}>
          <p>
            <DotsThree size={40} color="#FFF" weight="fill" />
          </p>
        </div>
      )}
    </div>
  );
}
