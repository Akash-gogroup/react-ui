import { ThemeProvider } from "@mui/material";
import type { Preview } from "@storybook/react";
import { defaultTheme } from "../src/themes/theme";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={defaultTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
