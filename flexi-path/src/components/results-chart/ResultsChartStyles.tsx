import { useTheme } from '@mui/material/styles';

const ResultsChartStyles = () => {
  const theme = useTheme();
  const styles = {
    chartContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      maxWidth: '51rem',
      minWidth: '32rem',
      width: '100%',
      border: '1px solid #ABA5A5',
      borderRadius: theme.shape,
      padding: '2rem 4rem',
      margin: '1.5rem auto',
      [theme.breakpoints.down('md')]: {
        margin: '1.5rem 0',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '1.75rem',
      },
    },
    horizontalRule: {
      width: '100%',
      height: '1px',
      backgroundColor: theme.palette.common.black,
      marginTop: '1rem',
    },
    detailsContainer: {
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingTop: '1.5rem',
    },
    scoreDetail: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    scoreImg: {
      width: '1rem',
      height: '1rem',
      marginRight: '.5rem',
    },
    scoreTypeContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    scoreType: {
      color: theme.palette.primary.main,
      fontSize: '0.6rem',
      fontStyle: 'normal',
      fontWeight: 800,
      lineHeight: 'normal',
      letterSpacing: '-0.02rem',
      textTransform: 'capitalize',
      [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '.7rem',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '.8rem',
      },
    },
    scoreTypeAnswer: {
      color: theme.palette.common.black,
      fontSize: '0.6rem',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      letterSpacing: '-0.02rem',
      [theme.breakpoints.between('md', 'lg')]: {
        fontSize: '.7rem',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '.8rem',
      },
    },
  };
  return styles;
};

export default ResultsChartStyles;
