import { useTheme } from '@mui/material/styles';

const NextBtnStyles = () => {
  const theme = useTheme();
  const styles = {
    quizNextBtn: {
      background: theme.palette.primary.main,
    },
  };
  return styles;
};

export default NextBtnStyles;
