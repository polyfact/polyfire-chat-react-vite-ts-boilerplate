import ChatUI from "@polyfact/chat";
import { usePolyfact, type Chat } from "polyfact";

import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Loader } from "./components/Loader";

import config from "./config";

import "./App.css";

const BOT_NAME = "Seraphina";

function App() {
  const { polyfact, login, loading } = usePolyfact({
    project: "7b29de50-8ce4-4449-8382-115eee716f76",
  });
  const [chat, setChat] = useState<Chat>();

  useEffect(() => {
    if (polyfact) {
      setChat(
        new polyfact.Chat({
          // systemPromptId: "8fc39ca4-3941-40d9-824a-5ed283102f6e",
          systemPromptId: "49735ec7-6c20-4ceb-9741-3de1db4fe6cd",
          autoMemory: true,
        })
      );
    }
  }, [polyfact]);

  return (
    <div className="app-container">
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
