import { useContext } from 'react';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { QuizStateContext } from '../../context/QuizStateContext';
import SaveAndExitDialogStyles from './SaveAndExitDialogStyles';

export default function SaveAndExitDialog() {
  const { handleEndQuiz, dialogOpen, setDialogOpen } =
    useContext(QuizStateContext);

  const styles = SaveAndExitDialogStyles();

  return (
    <Dialog
      open={dialogOpen}
      onClose={() => setDialogOpen(false)}
      sx={styles.dialogContainer}
      aria-labelledby="dialog-title"
    >
      <DialogTitle sx={styles.dialogHeader}>
        {'Are you certain you wish to save and exit?'}
      </DialogTitle>
      <DialogActions sx={styles.dialogBtnContainer}>
        <Button
          sx={styles.dialogCancelBtn}
          onClick={() => setDialogOpen(false)}
        >
          No, Cancel
        </Button>
        <Button sx={styles.dialogSaveBtn} onClick={handleEndQuiz} autoFocus>
          Yes, Save and Exit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
