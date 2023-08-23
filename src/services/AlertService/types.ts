import { ColorCode } from "components/Alert/types";

export type SetSpecificMessageProps = {
  message: string;
  timeout?: number;
};

export type SetMessageProps = SetSpecificMessageProps & { messageType: ColorCode };

export type SetTemporalMessageMethod = (props: SetMessageProps) => void;

export type SetSpecificMessageMethod = (props: SetSpecificMessageProps) => void;
