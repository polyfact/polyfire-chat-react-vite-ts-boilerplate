import * as Dialog from "@radix-ui/react-dialog";
import { Dispatch } from "react";
import { ChatProps } from "../Chat/ChatContainer";

interface ModalProps {
  setChat: Dispatch<React.SetStateAction<ChatProps[]>>;
}

export function Modal({ setChat }: ModalProps) {
  function clearChat() {
    setChat([]);
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-[#000]/40 inset-0 fixed" />

      <Dialog.Content className="fixed bg-color_5 py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg sm:w-[480px] w-[80%] shadow-lg shadow-black/25 text-[#FFF]">
        <Dialog.Title className="font-bold text-xl">
          Do you really want to clear the chat?
        </Dialog.Title>

        <p className="my-12 text-base font-light">
          By clicking yes the chatbot history will be deleted and your
          conversations will be lost
        </p>

        <div className="flex sm:items-center justify-around flex-col sm:flex-row">
          <Dialog.Close
            className={`bg-color_2 rounded-3xl px-8 py-2 text-xl font-bold hover:bg-color_5 duration-300 border-color_2 border-2 hover:text-[#FFF] button mb-4 sm:mb-0`}
            onClick={clearChat}
          >
            CANCEL
          </Dialog.Close>
          <Dialog.Close
            className={`bg-color_4 rounded-3xl px-8 py-2 text-xl font-bold hover:bg-color_5 duration-300 border-color_4 border-2 hover:text-[#FFF] button`}
            onClick={clearChat}
          >
            YES
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
