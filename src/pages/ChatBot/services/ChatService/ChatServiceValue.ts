import { Message, OnChatBotSubmitListener } from "./types";

export default interface ChatServiceValue {
  readonly INPUT_NAME: string;
  readonly MIN_LENGTH: number;
  readonly messages: Message[];
  readonly isBotWriting: boolean;
  readonly chatHasFinished: boolean;
  readonly onChatFormSubmit: OnChatBotSubmitListener;
}
