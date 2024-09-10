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
      width: { md: '7.5rem', lg: '8rem', xl: '9rem' },
    },
  };
  return styles;
};

export default SignUpBtnStyles;
