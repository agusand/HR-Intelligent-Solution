import { ColorCode } from "./types";

export default interface AlertProps {
  message: string;
  severity?: ColorCode;
}
