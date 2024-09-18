import React from "react";
import {
  Button as MUIButton,
  ButtonProps,
  ThemeProvider,
  Theme,
} from "@mui/material";
import { getTheme } from "../themes/themeHandler";

export interface IButtonProps extends ButtonProps {
  color?: "primary" | "secondary" | "success" | "error";
  variant?: "contained" | "outlined" | "text";
  size?: "small" | "medium" | "large";
  theme?: Theme; // Allow consumers to provide their own theme
}

export const Button: React.FC<IButtonProps> = ({
  children,
  color = "primary",
  variant = "contained",
  size = "medium",
  theme,
  ...props
}) => {
  const appliedTheme = getTheme(theme);
  return (
    <ThemeProvider theme={appliedTheme}>
      <MUIButton color={color} variant={variant} size={size} {...props}>
        {children}
      </MUIButton>
    </ThemeProvider>
  );
};
