import { Button } from '@mui/material';
import SaveAndExitBtnStyles from './SaveAndExitBtnStyles';

type SaveAndExitBtnProps = {
  handleDialogOpen: () => void;
};

export default function SaveAndExitBtn({
  handleDialogOpen,
}: SaveAndExitBtnProps) {
  const styles = SaveAndExitBtnStyles();

  return (
    <Button
      variant="outlined"
      sx={styles.saveAndExitBtn}
      onClick={handleDialogOpen}
    >
      save & exit
    </Button>
  );
}
