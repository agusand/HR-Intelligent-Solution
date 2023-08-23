import { Alert } from "@mui/material";

import AlertProps from "./AlertProps";
import styles from "./index.module.scss";

const CustomAlert = ({ message, severity = "error" }: AlertProps) => {
  return (
    <div className={styles.container}>
      <Alert severity={severity}>{message}</Alert>
    </div>
  );
};

export default CustomAlert;
