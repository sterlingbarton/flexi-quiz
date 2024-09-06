import { Button } from '@mui/material';
import SignUpBtnStyles from './SignUpBtnStyles';

export function SignUpBtn() {
  const styles = SignUpBtnStyles();
  return (
    <Button variant="contained" sx={styles.signUpBtn}>
      Sign up
    </Button>
  );
}

export function DarkNavSignUpBtn() {
  const styles = SignUpBtnStyles();
  return (
    <Button variant="outlined" sx={styles.darkNavSignUpBtn}>
      Sign up
    </Button>
  );
}
