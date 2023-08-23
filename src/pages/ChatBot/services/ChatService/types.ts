import { FormEventHandler } from "react";

import ChatMessagesProps from "pages/ChatBot/components/ChatMessage/ChatMessageProps";

export type OnChatBotSubmitListener = FormEventHandler<HTMLFormElement>;

export type Message = ChatMessagesProps;
export type SetMessagesProps = { data: Message[]; merge: boolean };

export type Question = { id: number; question: string };

export type Answer = { questionId: number; answer: string };
