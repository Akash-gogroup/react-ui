// src/components/CustomButton.tsx
import React from 'react';
import { Button as MUIButton, ButtonProps, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

// Define your theme within the button component
export const buttonTheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
      },
    },
  },
});

export interface IButtonProps extends ButtonProps {
  color?: 'primary' | 'secondary' | 'success' | 'error';
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
}

export const Button: React.FC<IButtonProps> = ({
  children,
  color = 'primary',
  variant = 'contained',
  size = 'medium',
  ...props
}) => (
  <ThemeProvider theme={buttonTheme}>
    <MUIButton
      color={color}
      variant={variant}
      size={size}
      {...props}
    >
      {children}
    </MUIButton>
  </ThemeProvider>
);
