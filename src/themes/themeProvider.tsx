// src/GoGroupUiThemeProvider.tsx
import { createTheme, Theme, ThemeProvider } from "@mui/material"; // Import your default theme
import { defaultTheme } from "./theme";
import { ReactNode } from "react";

interface GoGroupUiThemeProviderProps {
  children: ReactNode;
  theme?: Theme;
}

export const GoGroupUiThemeProvider = ({
  children,
  theme,
}: GoGroupUiThemeProviderProps) => {
  const appliedTheme = theme ? createTheme(theme) : defaultTheme;

  return <ThemeProvider theme={appliedTheme}>{children}</ThemeProvider>;
};
