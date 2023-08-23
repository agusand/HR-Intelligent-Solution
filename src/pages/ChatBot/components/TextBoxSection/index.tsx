import TextField from "../TextField";
import styles from "./index.module.scss";

import { useChatService } from "pages/ChatBot/services/ChatService";

export default function TextBoxSection() {
  const { onChatFormSubmit, INPUT_NAME, MIN_LENGTH } = useChatService();
  return (
    <div className={styles.section}>
      <TextField
        placeholder="Ingresá respuesta"
        onSubmit={onChatFormSubmit}
        name={INPUT_NAME}
        min={MIN_LENGTH}
      />
      <p className={styles.infoText}>
        Ingresá cada respuesta en un único envío de al menos {MIN_LENGTH} caracteres
      </p>
    </div>
  );
}
