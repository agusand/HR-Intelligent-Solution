import styles from "./index.module.scss";

export default function WritingPlaceholder() {
  return (
    <div className={styles.dotsContainer}>
      <div className={`${styles.dot} ${styles["dot--first"]}`}></div>
      <div className={`${styles.dot} ${styles["dot--second"]}`}></div>
      <div className={`${styles.dot} ${styles["dot--third"]}`}></div>
    </div>
  );
}
