import { Dispatch, SetStateAction } from "react";

export default interface SearchServiceValue {
  readonly HIGHER_LIMIT: number;
  readonly inputValue: string;
  readonly setInputValue: Dispatch<SetStateAction<string>>;
  readonly isDisabled: boolean;
  readonly setIsDisabled: Dispatch<SetStateAction<boolean>>;
  readonly isHigher: boolean;
  readonly setIsHigher: Dispatch<SetStateAction<boolean>>;
}
