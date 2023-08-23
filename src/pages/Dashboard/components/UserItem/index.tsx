import { Link } from "react-router-dom";

import styles from "./index.module.scss";
import UserItemProps from "./UserItemProps";

export default function UserItem({
  positionId,
  userEmail,
  userName,
  scoring,
  active = false,
}: UserItemProps) {
  return (
    <Link
      to={active ? `/dashboard/${positionId}` : `/dashboard/${positionId}/${userEmail}`}
      className={styles.link}
    >
      <li className={`${styles.listItem} ${active ? styles["listItem--active"] : null} `}>
        <p className={styles.text}>{userName}</p>
        {scoring && (
          <span className={styles.text}>
            Fit: {scoring}%{" "}
            <div className={styles.bar}>
              <div className={styles.barFill} style={{ width: `${scoring}%` }}></div>
            </div>
          </span>
        )}
      </li>
    </Link>
  );
}
