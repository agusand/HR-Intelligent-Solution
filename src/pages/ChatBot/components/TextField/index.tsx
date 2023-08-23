import { Send as SendIcon } from "@mui/icons-material";

import styles from "./index.module.scss";
import TextFieldProps from "./TextFieldProps";

import useFormControl from "./hooks/useFormControl";

import { useChatService } from "pages/ChatBot/services/ChatService";

export default function TextField({ placeholder, onSubmit, name, min }: TextFieldProps) {
  const { inputText, onInputChange, onFormSubmit } = useFormControl(onSubmit);
  const { isBotWriting, chatHasFinished } = useChatService();

  return (
    <form className={styles.container} onSubmit={onFormSubmit}>
      <input
        className={styles.input}
        placeholder={placeholder}
        name={name}
        value={inputText}
        onChange={onInputChange}
        disabled={isBotWriting || chatHasFinished}
      />
      <button
        className={styles.button}
        type="submit"
        disabled={!inputText || inputText.length < min}
      >
        <SendIcon fontSize="large" />
      </button>
    </form>
  );
}
