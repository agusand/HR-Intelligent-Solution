import { useMemo } from "react";

import PositionItem from "../PositionItem";
import styles from "./index.module.scss";
import PositionListProps from "./PositionListProps";

import useGetPositions from "./hooks/useGetPositions";
import { Position } from "./hooks/useGetPositions/types";

import { useSearchService } from "pages/Dashboard/services/SearchService";

export default function PositionsList({ activePosition }: PositionListProps) {
  const { data } = useGetPositions();

  const { inputValue, isHigher, HIGHER_LIMIT } = useSearchService();

  const filteredData = useMemo<Position[]>(
    () => data.filter((position) => position.name.toUpperCase().includes(inputValue.toUpperCase())),
    [data, inputValue],
  );

  return (
    <>
      {filteredData?.length ? (
        <ul className={styles.list}>
          {filteredData.map((position) => (
            <PositionItem
              key={position.id}
              positionId={position.id}
              positionName={position.name}
              active={position.id === activePosition}
              collapsed={!!activePosition}
              postulants={
                position.profilesScoring.filter((scoring) =>
                  isHigher ? scoring > HIGHER_LIMIT : scoring,
                ).length
              }
              expectedPostulants={position.sockets}
            />
          ))}
        </ul>
      ) : (
        <div className={styles.messageContainer}>
          <p className={styles.message}>There aren&apos;t results</p>
        </div>
      )}
    </>
  );
}
