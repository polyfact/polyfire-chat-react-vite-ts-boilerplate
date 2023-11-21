"use client";
import { usePolyfire } from "polyfire-js/hooks";
import { useState, useEffect } from "react";

import { Chat as ChatType } from "polyfire-js";
import { Loader } from "../Loader";

import ChatUI from "@polyfact/chat";
import ColorPickerWrapper from "../Colors";

const BOT_NAME = import.meta.env.VITE_POLYFIRE_BOTNAME || "Chatbot";

const defaultColors = {
  chatBackgroundColor: "rgba(111, 111, 111, 0.1)",
  chatTextColor: "#2D3748",
  inputBackgroundColor: "#E2E8F0",
  inputColor: "#2D3748",
  placeholderTextColor: "#A0AEC0",
  botMessageColor: "#2D3748",
  botMessageBackgroundColor: "rgba(220, 242, 247)",
  userMessageColor: "#E2E8F0",
  userMessageBackgroundColor: "#4A5568",
  buttonBackgroundColor: "#4A5568",
  buttonBorderColor: "#2D3748",
  dotsColor: "#A0AEC0",
};

export function Chatbot() {
  const {
    auth: { login, status },
    utils: { Chat },
  } = usePolyfire();
  const [chat, setChat] = useState<ChatType>();

  useEffect(() => {
    if (!chat && status === "authenticated") {
      setChat(new Chat({ autoMemory: true }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  if (login && status === "unauthenticated") {
    return (
      <button
        onClick={() => login({ provider: "github" })}
        className="login-btn"
      >
        Login with Github
      </button>
    );
  }

  if (status === "loading") {
    return <Loader />;
  }

  if (chat && status === "authenticated") {
    ///////////////////////////////////////////////////////////////
    // Looking to easily tailor your chatbot's appearance?       //
    // Simply set the following condition to true to activate    //
    // the customization feature. This enables you to try out    //
    // various color schemes with ease. After selecting your     //
    // preferred colors, just update the defaultColors           //
    // and delete this block of code.                            //
    ///////////////////////////////////////////////////////////////

    if (false) {
      return (
        <ColorPickerWrapper initialColors={defaultColors}>
          {({ colors }) => {
            return (
              <ChatUI
                chat={chat as ChatType}
                botName={BOT_NAME}
                buttonBorderWidth="1px"
                {...colors}
              />
            );
          }}
        </ColorPickerWrapper>
      );
    }
    ////////////////////////////////////////////////

    return (
      <ChatUI
        chat={chat}
        botName={BOT_NAME}
        buttonBorderWidth="1px"
        {...defaultColors}
      />
    );
  }

  return null;
}
