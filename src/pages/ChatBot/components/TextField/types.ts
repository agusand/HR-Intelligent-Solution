import { FormEventHandler, ChangeEventHandler } from "react";

export type OnSubmitEventListener = FormEventHandler<HTMLFormElement>;

export type OnChangeEventListener = ChangeEventHandler<HTMLInputElement>;
