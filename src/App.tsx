import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Chatbot } from "./components/Chatbot";
import { PolyfireProvider } from "polyfire-js/hooks";

import "./App.css";

const BOT_NAME = import.meta.env.VITE_POLYFIRE_BOTNAME || "Chatbot";

function App() {
  return (
    <div className="app-container">
      <PolyfireProvider
        // Need to add the project alias in the .env file
        project={import.meta.env.VITE_POLYFIRE_PROJECT || ""}
      >
        <Header
          title={BOT_NAME}
          logo="./logo.svg" // to replace with your own logo replace the logo.svg file in the public folder
          bgColor="#2D3748"
          textColor="#E2E8F0"
        />
        <div className="content">
          <Chatbot />
        </div>

        <Footer name={BOT_NAME} bgColor="#2D3748" textColor="#E2E8F0" />
      </PolyfireProvider>
    </div>
  );
}

export default App;
