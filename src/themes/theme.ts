import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    success: {
      main: "#4caf50",
    },
    error: {
      main: "#f44336",
    },
  },
  components: {
    // Button theme
    MuiButton: {
      defaultProps: {
        disableRipple: true, // Disable ripple globally for buttons
      },
      styleOverrides: {
        sizeSmall: {
          padding: "6px 12px",
          fontSize: "12px",
        },
        sizeMedium: {
          padding: "8px 16px",
          fontSize: "14px",
        },
        sizeLarge: {
          padding: "10px 20px",
          fontSize: "16px",
        },
        containedPrimary: {
          backgroundColor: "#1976d2",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#115293",
          },
        },
        outlinedPrimary: {
          borderColor: "#1976d2",
          color: "#1976d2",
          "&:hover": {
            borderColor: "#115293",
            backgroundColor: "#e3f2fd",
          },
        },
        textPrimary: {
          color: "#1976d2",
          "&:hover": {
            backgroundColor: "#e3f2fd",
          },
        },
      },
    },
  },
});
