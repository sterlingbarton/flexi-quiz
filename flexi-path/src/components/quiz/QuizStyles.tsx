import { useTheme } from '@mui/material/styles';

const QuizStyles = () => {
  const theme = useTheme();
  const styles = {
    quizContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      margin: '0 auto',
      width: { xs: '98%', sm: '80%', md: '95%', lg: '85%', xl: '80%' },
      height: { xs: '100%', md: '80%', xl: '85%' },
    },
    question: {
      color: theme.palette.primary.main,
      fontSize: { xs: '1.15rem', md: '1.25rem', lg: '1.4rem' },
      fontWeight: 500,
      lineHeight: 'normal',
      letterSpacing: '-0.05rem',
      textAlign: 'center',
      paddingTop: '1.25rem',
    },
    gridContainer: {
      '&.MuiGrid-root': {
        width: { xs: '85%', md: '100%' },
        height: { xs: '85%', md: '65%', lg: '70%' },
        maxWidth: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
      },
    },
    answer: {
      '&.MuiGrid-item': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
      },
    },
  };
  return styles;
};

export default QuizStyles;
