import { CircularProgress } from "@mui/material";
import styled from "@emotion/styled";

import styles from "./index.module.scss";
import LoadingProps from "./LoadingProps";

export const StyledCircularProgress = styled(CircularProgress)(() => ({
  "&.MuiCircularProgress-root": {
    color: "inherit",
  },
}));

const Loading = ({ isBlocking = false, isAbsolute = false }: LoadingProps) => {
  return (
    <div
      className={`${styles.container} ${isAbsolute ? styles.container_absolute : ""} ${
        isBlocking ? styles.container_blocking : ""
      }`}
    >
      <StyledCircularProgress />
    </div>
  );
};

export default Loading;
