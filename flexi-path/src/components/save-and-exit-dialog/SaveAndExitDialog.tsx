import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import SaveAndExitDialogStyles from './SaveAndExitDialogStyles';

type SaveAndExitDialogProps = {
  open: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleEndQuiz: () => void;
};

export default function SaveAndExitDialog({
  open,
  setDialogOpen,
  handleEndQuiz,
}: SaveAndExitDialogProps) {
  const styles = SaveAndExitDialogStyles();
  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={styles.dialogContainer}
      aria-labelledby="dialog-title"
    >
      <DialogTitle sx={styles.dialogHeader}>
        {'Are you certain you wish to save and exit?'}
      </DialogTitle>
      <DialogActions sx={styles.dialogBtnContainer}>
        <Button sx={styles.dialogCancelBtn} onClick={handleClose}>
          No, Cancel
        </Button>
        <Button sx={styles.dialogSaveBtn} onClick={handleEndQuiz} autoFocus>
          Yes, Save and Exit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
