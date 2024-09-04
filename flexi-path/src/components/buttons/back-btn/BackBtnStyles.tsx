import { useTheme } from '@mui/material/styles';

const BackBtnStyles = () => {
  const theme = useTheme();
  const styles = {
    quizBackBtn: {
      color: theme.palette.primary.main,
    },
  };
  return styles;
};

export default BackBtnStyles;
