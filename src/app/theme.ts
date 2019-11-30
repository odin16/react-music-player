import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({
  palette: {
    common: {
      black: 'rgba(0, 0, 0, 1)',
      white: 'rgba(255, 255, 255, 1)'
    },
    background: {
      paper: 'rgba(255, 255, 255, 1)',
      default: 'rgba(0, 0, 0, 1)'
    },
    primary: {
      light: 'rgba(255, 90, 54, 1)',
      main: 'rgba(255, 0, 0, 1)',
      dark: 'rgba(194, 0, 0, 1)',
      contrastText: 'rgba(255, 255, 255, 1)'
    },
    secondary: {
      light: 'rgba(99, 250, 255, 1)',
      main: 'rgba(0, 199, 206, 1)',
      dark: 'rgba(0, 150, 157, 1)',
      contrastText: 'rgba(255, 255, 255, 1)'
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#fff'
    },
    text: {
      primary: 'rgba(255, 255, 255, 1)',
      secondary: 'rgba(170, 170, 170, 1)',
      disabled: 'rgba(255, 255, 255, 1)',
      hint: 'rgba(255, 255, 255, 1)'
    }
  },
  typography: {
    fontFamily: ['"Open Sans"', '"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'].join(',')
  }
});
