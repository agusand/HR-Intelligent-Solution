import { useParams } from "react-router-dom";
import { useEffect } from "react";

import styles from "./index.module.scss";

import PositionsList from "./components/PositionsList";
import ApplicantUsersList from "./components/ApplicantUsersList";
import UserIndicators from "./components/UserIndicators";
import SearchBar from "./components/SearchBar";

import useGetHigherProfiles from "./hooks/useGetHigherProfiles";

import { SearchServiceProvider, useSearchService } from "./services/SearchService";

function Dashboard() {
  const { positionId, userEmail } = useParams();

  const { setIsDisabled, HIGHER_LIMIT } = useSearchService();
  const { data, isLoading, isError } = useGetHigherProfiles(HIGHER_LIMIT);

  useEffect(() => {
    setIsDisabled(!!positionId);
  }, [positionId, setIsDisabled]);

  return (
    <div className={styles.container}>
      <div className={styles.searchBarContainer}>
        <SearchBar />
      </div>
      <div className={styles.titlesGrid}>
        <h2
          className={`${styles.positionsTitle} ${
            positionId ? styles["positionsTitle--collapsed"] : ""
          }`}
        >
          Open positions
        </h2>
        <h2
          className={`${styles.usersTitle} ${positionId ? styles["usersTitle--visible"] : ""} ${
            userEmail ? styles["usersTitle--collapsed"] : ""
          }`}
        >
          Applicant users
        </h2>
        <h2
          className={`${styles.indicatorsTitle} ${
            userEmail ? styles["indicatorsTitle--visible"] : ""
          }`}
        >
          User scoring details
        </h2>
      </div>
      <div className={styles.grid}>
        <div
          className={`${styles.positionsContainer} ${
            positionId ? styles["positionsContainer--collapsed"] : ""
          }`}
        >
          <PositionsList activePosition={Number(positionId)} />
        </div>
        {positionId ? (
          <div
            className={`${styles.usersContainer} ${
              positionId ? styles["usersContainer--visible"] : ""
            } ${userEmail ? styles["usersContainer--collapsed"] : ""}`}
          >
            <ApplicantUsersList
              activeUser={userEmail}
              positionId={Number(positionId)}
              recommended={isLoading || isError ? [] : data}
            />
          </div>
        ) : null}
        <div
          className={`${styles.indicatorsContainer} ${
            userEmail ? styles["indicatorsContainer--visible"] : ""
          }`}
        >
          <UserIndicators activeUser={userEmail} positionId={Number(positionId)} />
        </div>
      </div>
    </div>
  );
}

export default function DashboardWrapper() {
  return (
    <SearchServiceProvider>
      <Dashboard />
    </SearchServiceProvider>
  );
}
