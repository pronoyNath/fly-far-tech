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
    // Accordion styles
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          margin: 0,
          transition: 'border 150ms ease',
          '&:before': {
            display: 'none',
          },
          '&.Mui-expanded': {
            margin: 0,
            border: 'none',
            
          },
          '&:not(.Mui-expanded)': {
            
            // borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
            // borderRight: '1px solid rgba(0, 0, 0, 0.12)',
          },
          '& + &': {
            borderTop: '1px solid rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
    
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: '0 16px',
          minHeight: '48px',
          '&.Mui-expanded': {
            minHeight: '48px',
            // borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
          },
        },
        content: {
          margin: '12px 0',
          '&.Mui-expanded': {
            margin: '12px 0',
            borderBottom: "none"
          },
        },
      },
    },
    
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '16px',
        },
      },
    },

    // Button styles
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
        },
      },
    },
    
    // Tab styles
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 'unset',
          padding: '12px 12px',
          '&.Mui-selected': {
            color: '#32D094',
          },
        },
      },
    },
    
    // Tabs styles
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 'unset',
        },
        indicator: {
          height: '3px',
        },
      },
    },
    
    // TabPanel styles
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: '16px 0',
        },
      },
    },
    
    // Select (Dropdown) styles
    MuiSelect: {
      styleOverrides: {
        select: {
          backgroundColor: 'secondary.main',
          '&:focus': {
            backgroundColor: 'secondary.main',
          },
        },
      },
    },
    
    // OutlinedInput (Dropdown border) styles
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
        },
      },
    },
    
    // FilledInput (Alternative dropdown style)
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'secondary.main',
          '&:hover': {
            backgroundColor: 'secondary.main',
          },
          '&.Mui-focused': {
            backgroundColor: 'secondary.main',
          },
          '&:before, &:after': {
            borderBottom: 'none',
          },
        },
      },
    },
    
    // Menu (Dropdown items) styles
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: 'secondary.main',
        },
      },
    },
    
    // MenuItem styles
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: 'rgba(50, 208, 148, 0.12)',
          },
          '&.Mui-selected:hover': {
            backgroundColor: 'rgba(50, 208, 148, 0.2)',
          },
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