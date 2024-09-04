import { useTheme } from '@mui/material/styles';

const SaveAndExitDialogStyles = () => {
  const theme = useTheme();
  const styles = {
    dialogContainer: {
      '& .MuiDialog-paper': {
        padding: '5.5rem 3.5rem 5.5rem 3.5rem',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '0.625rem',
        background: theme.palette.common.white,
        gap: '1.75rem',
      },
    },
    dialogHeader: {
      fontSize: '1.4rem',
      color: theme.palette.primary.main,
      textAlign: 'center',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      letterSpacing: '-0.055rem',
    },
    dialogBtnContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.5rem',
      maxWidth: '90%',
    },
    dialogCancelBtn: {
      width: { xs: '11rem', md: '15rem' },
      height: '2.8rem',
      padding: { xs: '1rem', md: '1rem 1.6rem' },
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
    },
    dialogSaveBtn: {
      width: { xs: '11rem', md: '15rem' },
      height: '2.8rem',
      padding: { xs: '1rem', md: '1rem 1.6rem' },
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  };
  return styles;
};

export default SaveAndExitDialogStyles;
