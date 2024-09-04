import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  palette: {
    primary: {
      main: '#1659CB',
    },
    action: {
      hover: '#1046A0', // Hover color for actions
    },
    text: {
      primary: '#000000',
      secondary: '#808080', // Dark grey text color
      disabled: '#BDBDBD', // Light grey text color
    },
    common: {
      black: '#000',
      white: '#FFF',
    },
  },
  shape: {
    borderRadius: 8, // Figma states 0.5 rem which is equivalent to 8px
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    button: {
      textTransform: 'none',
      fontSize: '15px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          width: '10rem',
          height: '2.5rem',
          flexShrink: 0,
          '&:hover': {
            backgroundColor: '#1046A0',
            color: '#FFF',
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
