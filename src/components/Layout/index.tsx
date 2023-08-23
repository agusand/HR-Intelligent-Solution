import { Outlet } from "react-router-dom";

import styles from "./index.module.scss";

import Header from "components/Header";
import Alert from "components/Alert";
import SideBar from "components/SideBar";

import { useAlertService } from "services/AlertService";

const Layout = () => {
  const { message, isVisible, colorCode } = useAlertService();

  return (
    <>
      <div className={styles.page}>
        <>
          <Header />
          <div className={styles.mainContainer}>
            <SideBar />
            <main className={styles.main}>
              <Outlet />
            </main>
          </div>
          {isVisible ? <Alert message={message || ""} severity={colorCode || undefined} /> : null}
        </>
      </div>
    </>
  );
};

export default Layout;
