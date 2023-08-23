import Indicator from "../Indicator";
import UserIndicatorsProps from "./UserIndicatorsProps";
import useGetUserIndicators from "./hooks/useGetUserIndicators";
import useMockIndicators from "./hooks/useMockIndicators";
import { useMockSuggestions } from "./hooks/useMockSuggestions";
import styles from "./index.module.scss";

import Loading from "components/Loading";

export default function UserIndicators({ activeUser, positionId }: UserIndicatorsProps) {
  const { data, isLoading } = useGetUserIndicators(positionId, activeUser);

  const { mockIndicators } = useMockIndicators();
  const { mockSuggestions } = useMockSuggestions();

  data.sort((a, b) => b.value - a.value);

  return (
    <div className={styles.container}>
      <div className={styles.indicatorsContainer}>
        {isLoading ? (
          <Loading />
        ) : (
          (data.length ? data : mockIndicators).map((indicator) => (
            <Indicator
              key={indicator.indicator}
              indicator={indicator.indicator}
              value={indicator.value}
            />
          ))
        )}
      </div>

      <div className={styles.suggestion}>
        <h3 className={styles.suggestionTitle}>Suggestions</h3>
        {isLoading ? (
          <Loading />
        ) : mockSuggestions?.length ? (
          <ul className={styles.suggestionText}>
            {mockSuggestions.map((suggestion) => (
              <li key={suggestion.message}>{suggestion.message}</li>
            ))}
          </ul>
        ) : (
          <div className={styles.messageContainer}>
            <p className={styles.message}>There aren&apos;t suggestions</p>
          </div>
        )}
      </div>
    </div>
  );
}
