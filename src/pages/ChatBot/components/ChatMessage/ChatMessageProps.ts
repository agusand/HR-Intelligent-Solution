import { ReactNode } from "react";

import { Emitter } from "./types";

export default interface ChatMessageProps {
  readonly children: ReactNode;
  readonly emitter: Emitter;
  isPlaceholder?: boolean;
}
