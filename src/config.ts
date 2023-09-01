// config.ts

interface Config {
  header: {
    logo: string;
    bgColor: string;
    textColor: string;
  };
  chat: {
    chatBackgroundColor: string;
    chatTextColor: string;
    inputBackgroundColor: string;
    inputColor: string;
    placeholderTextColor: string;
    botMessageColor: string;
    botMessageBackgroundColor: string;
    userMessageColor: string;
    userMessageBackgroundColor: string;
    botName: string;
    buttonBackgroundColor: string;
    buttonBorderColor: string;
    buttonBorderWidth: string;
    dotsColor: string;
    promptId: `${string}-${string}-${string}-${string}-${string}`;
    memoryId: string;
  };
  footer: {
    bgColor: string;
    textColor: string;
  };
}

// [start]
const config: Config = {
  header: {
    logo: "./logo.svg",
    bgColor: "#2D3748",
    textColor: "#E2E8F0",
  },
  chat: {
    chatBackgroundColor: "rgba(111, 111, 111, 0.1)",
    chatTextColor: "#2D3748",
    inputBackgroundColor: "#E2E8F0",
    inputColor: "#2D3748",
    placeholderTextColor: "#A0AEC0",
    botMessageColor: "#2D3748",
    botMessageBackgroundColor: "rgba(220, 242, 247)",
    userMessageColor: "#E2E8F0",
    userMessageBackgroundColor: "#4A5568",
    botName: "ChatBot",
    buttonBackgroundColor: "#4A5568",
    buttonBorderColor: "#2D3748",
    buttonBorderWidth: "1px",
    dotsColor: "#A0AEC0",
    promptId: "feea76f3-af40-4df9-be47-ad073d504615",
    memoryId: "",
  },
  footer: {
    bgColor: "#2D3748",
    textColor: "#E2E8F0",
  },
};

// [end]

export default config;
