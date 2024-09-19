// src/themeHandler.ts
import { Theme } from "@mui/material/styles";
import { defaultTheme } from "./theme"; // Assuming you have a default theme created

export const getTheme = (externalTheme?: Theme): Theme => {
  if (!externalTheme) {
    // Return a new instance of the default theme
    return defaultTheme; //Default theme is already created using createTheme function.
  }

  // Return the external theme directly or a new instance to avoid mutation
  return externalTheme;
};
