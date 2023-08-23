import { SetSpecificMessageMethod } from "./types";

import { ColorCode } from "components/Alert/types";

export default interface AlertServiceValue {
  readonly isVisible: boolean;
  readonly colorCode: ColorCode | null;
  readonly message: string | null;
  readonly setErrorMessage: SetSpecificMessageMethod;
  readonly setInfoMessage: SetSpecificMessageMethod;
  readonly setSuccessMessage: SetSpecificMessageMethod;
  readonly setWarningMessage: SetSpecificMessageMethod;
}
