import ChatUI from "@polyfact/chat";
import { usePolyfact, type Chat } from "polyfact";

import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";

import config from "./config";

import "./App.css";

function App() {
  const { polyfact, login, loading } = usePolyfact({
    project: "7b29de50-8ce4-4449-8382-115eee716f76", // create your own project at https://app.polyfact.com
  });
  const [chat, setChat] = useState<Chat>();

  useEffect(() => {
    if (polyfact) {
      setChat(
        new polyfact.Chat({
          systemPromptId:
            // Here a few prompt id to test (create your own with the Polyfact sdk or just use the prop systemPrompt)
            // chucky prompt : cb93e8e4-23fe-4a9d-b2b2-0b910d438509
            // virtual soft girlfriend prompt : 49735ec7-6c20-4ceb-9741-3de1db4fe6cd
            // midjourney prompt : f4a1f732-9c38-4bdb-b9e4-3baa7971286a
            // Holy bible prompt : 8fc39ca4-3941-40d9-824a-5ed283102f6e
            config.chat.promptId || "cb93e8e4-23fe-4a9d-b2b2-0b910d438509",
          autoMemory: true,
        })
      );
    }
  }, [polyfact]);

  return (
    <div
      className="app-container"
      style={{ backgroundColor: config.chat.botMessageBackgroundColor }}
    >
      <Header title={config.chat.botName} {...config.header} />
      <div className="content">
        {login ? (
          <button
            onClick={() => login({ provider: "github" })}
            className="login-btn"
          >
            Login with Github
          </button>
        ) : chat ? (
          <div className="chat-container">
            <ChatUI chat={chat} {...config.chat} />
          </div>
        ) : (
          <Loader />
        )}
      </div>
      <Footer name={config.chat.botName} {...config.footer} />
    </div>
  );
}

export default App;
