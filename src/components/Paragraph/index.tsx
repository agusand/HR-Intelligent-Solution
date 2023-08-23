import ParagraphProps from "./ParagraphProps";
import styles from "./index.module.scss";

export default function Paragraph({ text }: ParagraphProps) {
  return (
    <p className={styles.paragraph}>
      {text.split("\n").map((line) => (
        <span key={line}>{line}</span>
      ))}
    </p>
  );
}
