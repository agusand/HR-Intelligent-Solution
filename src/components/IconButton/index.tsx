import { IconButton } from "@mui/material";
import { ForwardedRef, forwardRef } from "react";

import IconButtonProps from "./IconButtonProps";

const CustomIconButton = (
  {
    className,
    component,
    onClick,
    capture = false,
    paddingZero = false,
    disabled = false,
    ...props
  }: IconButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <IconButton
      className={className || ""}
      color="inherit"
      onClick={capture ? undefined : onClick}
      onClickCapture={capture ? onClick : undefined}
      ref={ref}
      disabled={disabled}
      sx={{
        ...(paddingZero ? { padding: 0 } : {}),
        ...(disabled ? { cursor: "default" } : { cursor: "pointer" }),
      }}
      {...props}
    >
      {component}
    </IconButton>
  );
};

export default forwardRef(CustomIconButton);
