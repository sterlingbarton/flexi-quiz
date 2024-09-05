import { useContext } from 'react';
import { Button } from '@mui/material';
import { QuizStateContext } from '../../../context/QuizStateContext';
import SaveAndExitBtnStyles from './SaveAndExitBtnStyles';

export default function SaveAndExitBtn() {
  const { setDialogOpen } = useContext(QuizStateContext);
  const styles = SaveAndExitBtnStyles();
  return (
    <Button
      variant="outlined"
      sx={styles.saveAndExitBtn}
      onClick={() => setDialogOpen(true)}
    >
      save & exit
    </Button>
  );
}
