import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/router";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#32D094',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#D7E6F4',
      contrastText: '#000000',
      dark: '#525371',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 'unset', // Remove default min-height
          padding: '12px 12px', // Adjust padding to make tabs more compact
          '&.Mui-selected': {
            color: '#32D094', // Custom selected color
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 'unset', // Remove default min-height
        },
        indicator: {
          height: '3px', // Make indicator thinner if needed
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: '16px 0', // Adjust tab panel padding
        },
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </StrictMode>
  </ThemeProvider>
);