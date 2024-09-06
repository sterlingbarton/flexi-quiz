import { useTheme } from '@mui/material/styles';

const LogInBtnStyles = () => {
  const theme = useTheme();
  const styles = {
    logInBtn: {
      color: theme.palette.primary.main,
      mr: { sm: '.75rem' },
      border: { sm: 'none' },
    },
    darkLogInBtn: {
      color: theme.palette.common.white,
    },
  };
  return styles;
};

export default LogInBtnStyles;
