import { Button } from '@mui/material';
import SaveAndExitBtnStyles from './SaveAndExitBtnStyles';

type SaveAndExitBtnProps = {
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SaveAndExitBtn({ setDialogOpen }: SaveAndExitBtnProps) {
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
