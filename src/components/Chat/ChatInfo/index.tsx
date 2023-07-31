import { Calendar, ChatText } from "phosphor-react";

export function ChatInfo() {
  return (
    <div className="text-color_3 lg:flex flex-col items-center justify-between mt-auto lg:mb-auto h-[75%] mb-8 hidden">
      <img src="/bot.svg" alt="" />
      <div>
        <div className="flex flex-col items-center text-center">
          <ChatText size={40} weight="fill" />
          <p className="mt-4 w-[70%] text-xl text-[#0000007a]">
            Chat freely with our HolyBibleChat, your guide to unravel the Holy
            Bible and resolve your spiritual questions.
          </p>
        </div>

        <div className="flex flex-col items-center text-center mt-8">
          <Calendar size={40} weight="fill" />
          <p className="mt-4 w-[70%] text-xl text-[#0000007a]">
            Providing round-the-clock spiritual support, every day of the week.
          </p>
        </div>
      </div>
    </div>
  );
}
