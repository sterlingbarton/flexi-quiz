import { Button } from '@mui/material';
import LogInBtnStyles from './LogInBtnStyles';

export function LogInBtn() {
  const styles = LogInBtnStyles();
  return (
    <Button variant="outlined" sx={styles.logInBtn}>
      Log In
    </Button>
  );
}

export function DarkNavLogInBtn() {
  const styles = LogInBtnStyles();
  return (
    <Button variant="text" sx={styles.darkLogInBtn}>
      Log In
    </Button>
  );
}
