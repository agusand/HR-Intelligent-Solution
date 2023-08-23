import ChatMessage from "../ChatMessage";
import useAutoScroll from "./hooks/useAutoScroll";
import styles from "./index.module.scss";

import { useChatService } from "pages/ChatBot/services/ChatService";

export default function ChatBody() {
  const { messages } = useChatService();
  const { containerRef, boxRef } = useAutoScroll();

  return (
    <div className={styles.section} ref={containerRef}>
      <div className={styles.messagesContainer} ref={boxRef}>
        {messages.map((message, index) => (
          <ChatMessage key={index} emitter={message.emitter} isPlaceholder={message.isPlaceholder}>
            {message.children}
          </ChatMessage>
        ))}
      </div>
    </div>
  );
}
