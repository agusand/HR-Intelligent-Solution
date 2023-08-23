import { MouseEventHandler, ReactNode } from "react";

export default interface IconButtonProps {
  readonly className?: string;
  readonly component: ReactNode;
  readonly onClick?: MouseEventHandler;
  readonly capture?: boolean;
  readonly paddingZero?: boolean;
  readonly id?: string;
  readonly disabled?: boolean;
}
