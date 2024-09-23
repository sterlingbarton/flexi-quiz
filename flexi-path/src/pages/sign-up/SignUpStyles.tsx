import { useTheme } from '@mui/material/styles';

const SignUpStyles = () => {
  const theme = useTheme();
  const styles = {
    pageContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    vendorBtnContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%',
    },
    logInContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '35rem',
      height: '42rem',
      padding: '3rem 5.5rem',
      justifyContent: 'space-around',
      alignItems: 'center',
      boxShadow: '0px 0px 9px 0px rgba(0, 0, 0, 0.13)',
    },
    headingContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      width: '100%',
    },
    signUpLink: {
      width: '42%',
      fontSize: '0.75rem',
      fontWeight: 400,
      color: theme.palette.common.black,
      padding: '0.5rem',
      border: '1px solid #1659CB',
      borderRadius: 0,
      textDecoration: 'none',
      mb: '1.25rem',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    heading: { fontSize: '1.25rem', fontWeight: 600 },
    buttonGroupContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    icon: { mr: '.5rem' },
    googleAuthBtn: {
      width: '100%',
      mb: '1rem',
      fontSize: '0.7rem',
      fontWeight: 400,
      color: theme.palette.common.black,
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        background: '#FFF',
        color: theme.palette.common.black,
        transform: 'scale(1.02)',
      },
    },
    facebookAuthBtn: {
      width: '100%',
      mb: '1rem',
      background: '#1877F2',
      fontSize: '0.7rem',
      fontWeight: 400,
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        background: '#1877F2',
        transform: 'scale(1.02)',
      },
    },
    appleAuthBtn: {
      width: '100%',
      background: theme.palette.common.black,
      fontSize: '0.7rem',
      fontWeight: 400,
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        background: theme.palette.common.black,
        transform: 'scale(1.02)',
      },
    },
    logInPTag: { fontSize: '0.75rem', fontWeight: 400 },
    logInForm: {
      height: '14rem',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      justifyContent: 'space-between',
    },
  };
  return styles;
};

export default SignUpStyles;
