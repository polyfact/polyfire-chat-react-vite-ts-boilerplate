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
    bgColor: "",
    textColor: "",
  },
  chat: {
    chatBackgroundColor: "",
    chatTextColor: "",
    inputBackgroundColor: "",
    inputColor: "",
    placeholderTextColor: "",
    botMessageColor: "",
    botMessageBackgroundColor: "",
    userMessageColor: "",
    userMessageBackgroundColor: "",
    botName: "",
    buttonBackgroundColor: "",
    buttonBorderColor: "",
    buttonBorderWidth: "1px",
    dotsColor: "",
    memoryId: "",
    promptId: "feea76f3-af40-4df9-be47-ad073d504615",
  },
  footer: {
    bgColor: "",
    textColor: "",
  },
};

// [end]

export default config;
