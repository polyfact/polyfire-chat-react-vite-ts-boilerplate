import { Chat } from "./components/Chat/ChatContainer";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import "./styles/main.css";

function App() {
  return (
    <>
      <Header />
      <Chat />
      <Footer />
    </>
  );
}

export default App;
