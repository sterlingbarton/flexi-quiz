import { useTheme } from '@mui/material/styles';

const LoadDisplayStyles = () => {
  const theme = useTheme();
  const styles = {
    bodyContainer: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    centerContainer: {
      height: '50%',
      width: { xs: '100%', sm: '90%', md: '80%', lg: '50%' },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    header: {
      color: theme.palette.primary.main,
      textAlign: 'center',
      fontSize: '1.375rem',
      fontWeight: 600,
      lineHeight: 'normal',
      letterSpacing: '-0.055rem',
    },
    description: {
      color: '#000',
      textAlign: 'center',
      fontSize: '1rem',
      fontWeight: 300,
      lineHeight: 'normal',
      maxWidth: '80%',
    },
  };
  return styles;
};

export default LoadDisplayStyles;
