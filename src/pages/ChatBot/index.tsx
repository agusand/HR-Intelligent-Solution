import styles from "./index.module.scss";

import ChatBody from "./components/ChatBody";
import TextBoxSection from "./components/TextBoxSection";

import { ChatServiceProvider } from "./services/ChatService";

function ChatBot() {
  return (
    <div className={styles.container}>
      {
        <>
          <ChatBody />
          <TextBoxSection />
        </>
      }
    </div>
  );
}

export default function ChatBotWrapper() {
  return (
    <ChatServiceProvider>
      <ChatBot />
    </ChatServiceProvider>
  );
}
