import { useTheme } from '@mui/material/styles';

const ResultsStyles = () => {
  const theme = useTheme();
  const styles = {
    pageContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      height: '100vh',
    },
    bodyContainer: {
      flex: 1,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    displayContainer: {
      borderRadius: theme.shape,
      maxWidth: '51rem',
      minWidth: '20rem',
      flexShrink: 0,
      boxShadow: '0px 4px 17.3px 1px rgba(0, 0, 0, 0.09)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '.5rem',
      [theme.breakpoints.down('sm')]: {
        height: '36rem',
      },
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      margin: '0 4px',
      [theme.breakpoints.between('sm', 'md')]: {
        width: 8,
        height: 8,
      },
      [theme.breakpoints.down('sm')]: {
        width: 6,
        height: 6,
      },
    },
  };
  return styles;
};

export default ResultsStyles;
