import { useTheme } from '@mui/material/styles';

const ResultsNavigationStyles = () => {
  const theme = useTheme();
  const styles = {
    navigationContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      padding: '16px 24px',
      position: 'relative',
    },
    dotsContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    resultsBackBtn: {
      color: theme.palette.primary.main,
      [theme.breakpoints.between('sm', 'md')]: {
        width: '8rem',
      },
      [theme.breakpoints.down('sm')]: {
        width: '6rem',
      },
    },
    resultsNextBtn: {
      background: theme.palette.primary.main,
      [theme.breakpoints.between('sm', 'md')]: {
        width: '8rem',
      },
      [theme.breakpoints.down('sm')]: {
        width: '6rem',
      },
    },
  };
  return styles;
};

export default ResultsNavigationStyles;
