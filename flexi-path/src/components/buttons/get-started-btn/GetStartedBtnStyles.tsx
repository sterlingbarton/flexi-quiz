import { useTheme } from '@mui/material/styles';

const GetStartedBtnStyles = () => {
  const theme = useTheme();
  const styles = {
    getStartedBtn: {
      background: theme.palette.primary.main,
    },
  };
  return styles;
};

export default GetStartedBtnStyles;
