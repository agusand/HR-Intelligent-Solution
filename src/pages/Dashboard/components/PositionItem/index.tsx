import { Link } from "react-router-dom";

import styles from "./index.module.scss";
import PositionItemProps from "./PositionItemProps";

export default function PositionItem({
  positionId,
  positionName,
  postulants,
  expectedPostulants,
  collapsed = false,
  active = false,
}: PositionItemProps) {
  return (
    <Link to={active ? "/dashboard" : `/dashboard/${positionId}`} className={styles.link}>
      <li className={`${styles.listItem} ${active ? styles["listItem--active"] : null} `}>
        <p className={styles.text}>{positionName}</p>
        {!collapsed ? (
          <div className={styles.postulantsContainer}>
            <div className={styles.bar}>
              <div
                className={`${styles.barFill} ${
                  postulants / expectedPostulants >= 1 ? styles["barFill--alert"] : null
                } `}
                style={{ width: `${Math.min((postulants * 100) / expectedPostulants, 100)}%` }}
              ></div>
            </div>
            <p className={styles.text}>Applicant users: {postulants}</p>
          </div>
        ) : null}
      </li>
    </Link>
  );
}
