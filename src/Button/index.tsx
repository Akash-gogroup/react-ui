import React from "react";
import { Button as MUIButton, ButtonProps } from "@mui/material";

export interface IButtonProps extends ButtonProps {
  color?: "primary" | "secondary" | "success" | "error";
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
}

export const Button: React.FC<IButtonProps> = ({
  children,
  color = "primary",
  variant = "contained",
  size = "medium",
  ...props
}) => {
  return (
    <MUIButton color={color} variant={variant} size={size} {...props}>
      {children}
    </MUIButton>
  );
};
