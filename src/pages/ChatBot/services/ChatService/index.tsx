import { createContext, useContext, useCallback, useEffect, useMemo } from "react";

import ChatServiceValue from "./ChatServiceValue";
import { Message, OnChatBotSubmitListener } from "./types";
import useMessagesManager from "./hooks/useMessagesManager";
import useCreateIndicator from "./hooks/useCreateIndicators";

import GenericProps from "types/GenericProps";

import useMockUser from "utils/useMockUser";

const ChatService = createContext<ChatServiceValue | null>(null);
const INPUT_NAME = "message";
const MIN_LENGTH = 120;

export const useChatService = () => {
  return useContext(ChatService) as ChatServiceValue;
};

export function ChatServiceProvider({ children }: GenericProps) {
  const user = useMockUser();

  const { messages, setChatAnswers, isBotWriting, chatHasFinished } = useMessagesManager(user);
  const { createIndicator } = useCreateIndicator(user.positionApplied);

  const onChatFormSubmit = useCallback<OnChatBotSubmitListener>(
    (event) => {
      event.preventDefault();

      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);

      const answer = formData.get(INPUT_NAME)?.valueOf();

      if (typeof answer === "string") {
        setChatAnswers(answer);
      }
    },
    [setChatAnswers],
  );

  useEffect(() => {
    if (chatHasFinished) {
      createIndicator();
    }
  }, [chatHasFinished, createIndicator]);

  const finalMessages = useMemo<Message[]>(() => {
    if (chatHasFinished) {
      return [
        ...messages,
        { children: "The chat has finished, thanks for your time!", emitter: "bot" },
      ];
    }

    return messages;
  }, [chatHasFinished, messages]);

  return (
    <ChatService.Provider
      value={{
        onChatFormSubmit,
        INPUT_NAME,
        MIN_LENGTH,
        messages: finalMessages || [],
        isBotWriting,
        chatHasFinished,
      }}
    >
      {children}
    </ChatService.Provider>
  );
}
