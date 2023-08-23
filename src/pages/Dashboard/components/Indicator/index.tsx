import IndicatorProps from "./IndicatorProps";
import styles from "./index.module.scss";

export default function Indicator({ indicator, value }: IndicatorProps) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {indicator}: {value}%
      </p>
      <div className={styles.bar} style={{ width: `${value}%` }}></div>
    </div>
  );
}
