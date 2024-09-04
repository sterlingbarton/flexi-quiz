import { useTheme } from '@mui/material/styles';

const SaveAndExitBtnStyles = () => {
  const theme = useTheme();
  const styles = {
    saveAndExitBtn: {
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
    },
  };
  return styles;
};

export default SaveAndExitBtnStyles;
