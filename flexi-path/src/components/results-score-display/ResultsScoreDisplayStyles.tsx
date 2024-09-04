import { useTheme } from '@mui/material/styles';

const ResultsScoreDisplayStyles = () => {
  const theme = useTheme();
  const styles = {
    scoreDisplayContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      [theme.breakpoints.down('lg')]: {
        width: '90%',
        justifyContent: 'space-around',
      },
    },
    scoreDisplayHeader: {
      color: '#202020',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
      marginTop: '1rem',
    },
    captionContainer: {
      height: '4rem',
      maxWidth: '37rem',
      // marginTop: '.75rem',
    },
    caption: {
      color: '#202020',
      textAlign: 'center',
      fontSize: '1rem',
      fontStyle: 'normal',
      fontWeight: 300,
      lineHeight: '1.2rem',
    },
  };
  return styles;
};

export default ResultsScoreDisplayStyles;
