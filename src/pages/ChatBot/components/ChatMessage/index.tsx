import ChatMessageProps from "./ChatMessageProps";
import useChatIcon from "./hooks/useChatIcon";
import styles from "./index.module.scss";

import WritingPlaceholder from "../WritingPlaceholder";

export default function ChatMessage({
  children,
  emitter,
  isPlaceholder = false,
}: ChatMessageProps) {
  const icon = useChatIcon(emitter);

  return (
    <div className={`${styles.container} ${styles[`container--${emitter}`]}`}>
      <div className={styles.iconContainer}>{icon}</div>
      <div
        className={`${styles.messageBox__container} ${styles[`messageBox__container--${emitter}`]}`}
      >
        <div
          className={`${styles.messageBox__content} ${styles[`messageBox__content--${emitter}`]}`}
        >
          <div className={styles.childrenContainer}>
            {isPlaceholder ? <WritingPlaceholder /> : children}
          </div>
        </div>
        <div
          className={`${styles.messageBox__firstMask} ${
            styles[`messageBox__firstMask--${emitter}`]
          }`}
        ></div>
        <div className={styles.messageBox__secondMask}></div>
        <div
          className={`${styles.messageBox__thirdMask} ${
            styles[`messageBox__thirdMask--${emitter}`]
          }`}
        ></div>
      </div>
    </div>
  );
}
