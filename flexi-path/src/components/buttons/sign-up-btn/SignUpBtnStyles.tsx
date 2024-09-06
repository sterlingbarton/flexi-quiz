import { useTheme } from '@mui/material/styles';

const SignUpBtnStyles = () => {
  const theme = useTheme();
  const styles = {
    signUpBtn: {
      background: theme.palette.primary.main,
    },
    darkNavSignUpBtn: {
      background: theme.palette.common.white,
      color: theme.palette.primary.main,
    },
  };
  return styles;
};

export default SignUpBtnStyles;
