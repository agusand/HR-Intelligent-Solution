import { Option } from "./types";

export default interface MenuProps {
  readonly options: Option[];
  readonly isOpen: boolean;
}
