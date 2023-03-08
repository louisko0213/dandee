
import { createTheme } from '@mui/material';
import './styles/font/Poppins-Regular.ttf';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 760,
      lg: 1200,
      xl: 1440,
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'Poppins, sans-serif',
      textTransform: 'none',
    },
    h1: {
      fontSize: '45px',
      fontWeight: 700,
      lineHeight: '65px',
      '@media(max-width: 760px)': {
        fontSize: '30px',
        lineHeight: '50px'
      }
    },
    h2: {
      fontSize: '45px',
      fontWeight: 700,
      lineHeight: '65px',
      '@media(max-width: 760px)': {
        fontSize: '30px',
        lineHeight: '50px'
      }
    },
    h3: {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '35px'
    },
    h4: {
      fontSize: '16px',
      fontWeight: 500
    },
    h5: {
      fontSize: '15px',
      fontWeight: 500
    },
    h6: {
      fontSize: '13px',
      fontWeight: 500
    },
    body1: {
      fontSize: '15px',
      fontWeight: 500
    },
    body2: {
      fontSize: '15px',
      fontWeight: 500,
      textIndent: '2em'
    },
    button: {
      fontFamily: 'Poppins, sans-serif',
    },
  },
  spacing: 8,
  palette: {
    primary: {
      main: '#366EFF',
    },
    text: {
      primary: '#333333',
      secondary: '#515151'
    },
    info: {
      light: '#f9f8fc',
      main: '#ffffff',
      dark: '#f9f8fc',
      contrastText: '#382A6B'
    }
  },
});

export default theme;