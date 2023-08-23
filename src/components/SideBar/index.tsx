import styles from "./index.module.scss";
import useSideBarItems from "./hooks/useSideBarItems";

import SideBarItem from "components/SideBarItem";
import { useLocation } from "react-router-dom";

export default function SideBar() {
  const sideBarItems = useSideBarItems();
  const location = useLocation();

  return (
    <aside className={styles.sideBar}>
      <ul className={styles.list}>
        {sideBarItems.map((item) => (
          <SideBarItem key={item.title} {...item} active={location.pathname.includes(item.href)} />
        ))}
      </ul>
    </aside>
  );
}
