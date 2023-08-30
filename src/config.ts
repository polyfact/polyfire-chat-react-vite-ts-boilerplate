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
    bgColor: "#D81E5B",
    textColor: "#FFEBE9",
  },
  chat: {
    chatBackgroundColor: "#FFE3F0",
    chatTextColor: "#843B62",
    inputBackgroundColor: "#FFF5F7",
    inputColor: "#843B62",
    placeholderTextColor: "#C79B9E",
    botMessageColor: "#843B62",
    botMessageBackgroundColor: "#FFE1E5",
    userMessageColor: "#FFEBE9",
    userMessageBackgroundColor: "#D81E5B",
    botName: "ChatBot",
    buttonBackgroundColor: "#D81E5B",
    buttonBorderColor: "#843B62",
    buttonBorderWidth: "1px",
    dotsColor: "#843B62",
    promptId: "49735ec7-6c20-4ceb-9741-3de1db4fe6cd",
    memoryId: "",
  },
  footer: {
    bgColor: "#D81E5B",
    textColor: "#FFEBE9",
  },
};

// [end]

export default config;
