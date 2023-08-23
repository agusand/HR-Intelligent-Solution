import { Search as SearchIcon } from "@mui/icons-material";

import styles from "./index.module.scss";

import { useSearchService } from "pages/Dashboard/services/SearchService";
import { useCallback } from "react";
import { OnInputChangeMethod } from "./types";

export default function SearchBar() {
  const { inputValue, setInputValue, isDisabled, isHigher, setIsHigher, HIGHER_LIMIT } =
    useSearchService();

  const onInputChange = useCallback<OnInputChangeMethod>(
    (event) => {
      setInputValue(event.target.value);
    },
    [setInputValue],
  );

  return (
    <div className={styles.container}>
      <div className={styles.barContainer}>
        <input
          className={styles.input}
          value={inputValue}
          onChange={onInputChange}
          disabled={isDisabled}
          placeholder="Search position"
        />
        <SearchIcon className={styles.icon} fontSize="large" />
      </div>
      <div className={styles.checkboxContainer}>
        <input
          type="checkbox"
          name="limit"
          checked={isHigher}
          onChange={(event) => setIsHigher(event.target.checked)}
        />
        <label htmlFor="limit">Show applicant users with scoring higher than {HIGHER_LIMIT}%</label>
      </div>
    </div>
  );
}
