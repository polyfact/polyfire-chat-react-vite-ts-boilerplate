import { HandWaving, PaperPlaneRight, Pencil } from "phosphor-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { ChatProps } from "../ChatContainer";

import "./style.css";
import { Messages } from "../../Messages";
import api from "../../../services/api";

interface Props {
  chat: ChatProps[];
  setChat: Dispatch<SetStateAction<ChatProps[]>>;
}

const baseURL = "http://localhost:5173";

const systemMessage = `
Act as if you are a dedicated and enlightened church servant, thoroughly familiar with the Holy Bible's teachings and passages.
You will be given a topic or a biblical question, and your responsibility will be to interpret, discuss, and provide guidance based on the Bible's teachings.
I desire you to delve into and elaborate on five Bible verses related to a specific topic and write a comprehensive interpretation of each verse.
The subject under discussion is: What does the Bible convey about patience and forgiveness? When examining each verse, write it out in full and accompany it with a corresponding interpretation.
Ensure that the interpretation logically flows from the verse itself, maintaining a conversational yet deferential tone, as if you are providing guidance to a church member.
Explore in depth the implications of each verse, providing historical context and insights when necessary.
Keep the tone engaging and empathetic.
Use relatable anecdotes or examples to illustrate the teachings of each verse, creating a more personal connection.
Write with the empathy and understanding of a spiritual mentor, integrating a profound comprehension of the Holy Bible and its teachings into your explanations.
The overarching theme should underscore the virtues of patience and forgiveness as portrayed in the Bible.
To illustrate these virtues, use examples from real-life that your audience can relate to.
Avoid using complex theological terminology and do not inject personal beliefs or prejudices.
Strictly adhere to the teachings of the Bible.
Adopt the perspective of a devoted church servant guiding a fellow believer seeking wisdom from the scriptures.
The end product will be a personal letter sent to a church member in need of spiritual guidance.
The recipient of your writing is a person in their mid-40s, grappling with issues of patience and forgiveness in their personal life.
In the role of Gabrial, an AI assistant for the Holy Bible , embody the persona of a devoted and knowledgeable church servant.
And call your interlocutor by "my child" in masculine.
Your answer is formatted in markdown.
Make always short and concise answer (60 words).
Now, tell me just hello to start our conversation and ask me what you can do for me.
`;

export function ChatContent({ chat, setChat }: Props) {
  const [inputText, setInputText] = useState("");
  const [disableTextInput, setDisableTextInput] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setDisableTextInput(true);

    api
      .post("/chat", {
        message: systemMessage,
      })
      .then((r) => {
        const newBotMessage = {
          id: uuidv4(),
          isUser: false,
          message: r.data,
          hidden: true,
          createdAt: {
            hour: new Date().getHours(),
            minutes: new Date().getMinutes(),
          },
        };

        setDisableTextInput(false);
        setLoading(false);
        setChat((oldArray) => [...oldArray, newBotMessage]);
      })
      .catch((error) => {
        console.log("Error", error);

        const newBotMessage = {
          id: uuidv4(),
          isUser: false,
          message: "Connection failed. Please try again in a moment",
          createdAt: {
            hour: new Date().getHours(),
            minutes: new Date().getMinutes(),
          },
        };

        setDisableTextInput(false);
        setLoading(false);
        setChat((oldArray) => [...oldArray, newBotMessage]);
      });
  }, []);

  function handleSubmit(event: any) {
    event.preventDefault();

    if (inputText.length == 0) return;

    const newMessage = {
      id: uuidv4(),
      isUser: true,
      message: inputText,
      createdAt: {
        hour: new Date().getHours(),
        minutes: new Date().getMinutes(),
      },
    };

    setChat((oldArray) => [...oldArray, newMessage]);

    setDisableTextInput(true);
    setLoading(true);

    api
      .post("/chat", {
        message: inputText,
      })
      .then((r) => {
        const newBotMessage = {
          id: uuidv4(),
          isUser: false,
          message: r.data,
          createdAt: {
            hour: new Date().getHours(),
            minutes: new Date().getMinutes(),
          },
        };

        setDisableTextInput(false);
        setLoading(false);
        setChat((oldArray) => [...oldArray, newBotMessage]);
      })
      .catch((error) => {
        console.log("Error", error);

        const newBotMessage = {
          id: uuidv4(),
          isUser: false,
          message: "Connection failed. Please try again in a moment",
          createdAt: {
            hour: new Date().getHours(),
            minutes: new Date().getMinutes(),
          },
        };

        setDisableTextInput(false);
        setLoading(false);
        setChat((oldArray) => [...oldArray, newBotMessage]);
      });

    setInputText("");
  }

  return (
    <div className="grid grid-rows-chat bg-color_3/40 rounded-[40px] mr-auto ml-auto w-[90%] h-[calc(100%-11.1rem)] mt-6 relative">
      {chat.length == 0 && (
        <p className="w-[75%] mx-auto pt-8 text-center text-[#0000007a] font-semibold">
          <HandWaving size={40} weight="fill" className="mx-auto mb-4" />
          Welcome! I am Gabriel, a AI assistant, ready to provide enlightenment
          on your inquiries about the Holy Scripture.
        </p>
      )}

      {chat.length > 0 && <Messages chat={chat} loading={loading} />}

      <form className="flex justify-between w-[90%] mx-[5%] absolute bottom-8">
        <div className="flex bg-color_3/50 w-[85%] rounded-full px-8 py-3 my-auto">
          <Pencil size={32} weight="fill" className="mr-4" />
          <input
            type="text"
            placeholder="Write your spiritual question here.."
            className="w-full bg-color_1/0 focus:outline-0 placeholder:text-[#FFF] input"
            onChange={(event) => setInputText(event.target.value)}
            value={inputText}
            disabled={disableTextInput}
          />
        </div>

        <button
          className="bg-color_5 rounded-full w-14 h-14 active:bg-color_5 border-color_5 border-2 hover:bg-color_4 duration-300"
          onClick={handleSubmit}
        >
          <PaperPlaneRight size={28} weight="fill" className="m-auto" />
        </button>
      </form>
    </div>
  );
}
