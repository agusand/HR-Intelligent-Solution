import { Link } from "react-router-dom";

import SideBarItemProps from "./SideBarItemProps";
import styles from "./index.module.scss";

export default function SideBarItem({ title, href, icon, active = false }: SideBarItemProps) {
  return (
    <Link to={href} className={styles.link}>
      <li className={`${styles.item} ${styles[`item--${active ? "active" : ""}`]}`}>
        {icon}
        <span>{title}</span>
      </li>
    </Link>
  );
}
