import { Button } from '@mui/material';
import LogInBtnStyles from './LogInBtnStyles';

export default function LogInBtn() {
  const styles = LogInBtnStyles();
  return (
    <Button variant="outlined" sx={styles.logInBtn}>
      Log In
    </Button>
  );
}
