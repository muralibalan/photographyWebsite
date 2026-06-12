import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#FBF5EF',
      paper: '#FEF8F1',
    },
    primary: {
      main: '#6B4B34',
      contrastText: '#FAF5EE',
    },
    secondary: {
      main: '#C9A86E',
      contrastText: '#2D2D2B',
    },
    text: {
      primary: '#26221D',
      secondary: '#6D625B',
    },
    divider: '#D9C9B4',
  },
  typography: {
    fontFamily: ['"Cormorant Garamond"', 'Georgia', 'serif'].join(','),
    h1: {
      fontFamily: ['"Cormorant Garamond"', 'serif'].join(','),
      fontWeight: 700,
      fontSize: 'clamp(2.8rem, 5vw, 5rem)',
      lineHeight: 1.05,
    },
    h2: {
      fontFamily: ['"Cormorant Garamond"', 'serif'].join(','),
      fontWeight: 700,
      fontSize: 'clamp(2.1rem, 3.5vw, 3.6rem)',
      lineHeight: 1.1,
    },
    h3: {
      fontWeight: 600,
      fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
      letterSpacing: '0.02em',
    },
    body1: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: '1rem',
      lineHeight: 1.8,
    },
    body2: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: '0.95rem',
      lineHeight: 1.75,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.04em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          padding: '14px 26px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default theme;
