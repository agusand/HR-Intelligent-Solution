import { OnSubmitEventListener } from "./types";

export default interface TextFieldProps {
  placeholder: string;
  name: string;
  min: number;
  onSubmit: OnSubmitEventListener;
}
