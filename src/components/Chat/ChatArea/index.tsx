import { Eraser } from "phosphor-react";

import "./style.css";
import { ChatContent } from "../ChatContent";
import { Dispatch } from "react";
import { ChatProps } from "../ChatContainer";
import * as Dialog from "@radix-ui/react-dialog";

interface ChatAreaProps {
  chat: ChatProps[];
  setChat: Dispatch<React.SetStateAction<ChatProps[]>>;
}

export function ChatArea({ chat, setChat }: ChatAreaProps) {
  return (
    <div className="lg:w-[65%] w-100% h-[100%] text-[#FFF] chatButtons">
      <div className="flex justify-end mr-10 mt-12">
        <Dialog.Trigger
          className={`bg-color_3 rounded-3xl px-8 py-2 text-xl font-bold hover:bg-[#FFF] duration-300 border-color_3 border-2 hover:text-color_3 button`}
        >
          <Eraser size={24} weight="fill" className="mr-4" />
          Clear chat
        </Dialog.Trigger>
      </div>

      <ChatContent chat={chat} setChat={setChat} />
    </div>
  );
}
