import UserItem from "../UserItem";

import styles from "./index.module.scss";
import ApplicantUsersListProps from "./ApplicantUsersListProps";

import useGetUsersByPosition from "./hooks/useGetUsersByPosition";

import Loading from "components/Loading";
import { useSearchService } from "pages/Dashboard/services/SearchService";
import { useMemo } from "react";
import { User } from "pages/Dashboard/types";

export default function ApplicantUsersList({
  activeUser,
  positionId,
  recommended,
}: ApplicantUsersListProps) {
  const { HIGHER_LIMIT, isHigher } = useSearchService();
  const { data, isLoading, isError } = useGetUsersByPosition(positionId);

  const filteredData = useMemo<User[]>(() => {
    return data.filter((user) => user.scoring && (isHigher ? user.scoring > HIGHER_LIMIT : true));
  }, [HIGHER_LIMIT, data, isHigher]);

  const filteredRecommended = useMemo<User[]>(() => {
    return recommended.filter(
      (user) => !filteredData.map((user) => user.email).includes(user.email),
    );
  }, [filteredData, recommended]);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loading />
      ) : isError || filteredData.length === 0 ? (
        <div className={styles.messageContainer}>
          <p className={styles.message}>There aren&apos;t applicant users</p>
        </div>
      ) : (
        <ul className={styles.list}>
          {filteredData.map((user) => (
            <UserItem
              key={user.email}
              positionId={positionId}
              userEmail={user.email}
              userName={`${user.first_name} ${user.last_name}`}
              active={user.email === activeUser}
              scoring={user.scoring}
            />
          ))}
        </ul>
      )}
      <div className={styles.recommendations}>
        <h3 className={styles.recommendedUsersTitle}>Recommended users</h3>
        {isLoading ? (
          <Loading />
        ) : isError || filteredRecommended.length === 0 ? (
          <div className={styles.recommendedUsersContainer}>
            <p className={styles.message}>There aren&apos;t recommended users</p>
          </div>
        ) : (
          <ul className={styles.list}>
            {filteredRecommended
              .filter((user) => !filteredData.map((user) => user.email).includes(user.email))
              .map((user) => {
                const scoring = user.position[0].scoring;
                return (
                  <UserItem
                    key={user.email}
                    positionId={positionId}
                    userEmail={user.email}
                    userName={`${user.first_name} ${user.last_name}`}
                    active={user.email === activeUser}
                    scoring={scoring}
                  />
                );
              })}
          </ul>
        )}
      </div>
    </div>
  );
}
