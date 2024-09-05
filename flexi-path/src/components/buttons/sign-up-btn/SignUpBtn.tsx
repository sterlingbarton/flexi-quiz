import { Button } from '@mui/material';
import SignUpBtnStyles from './SignUpBtnStyles';

export default function LogInBtn() {
  const styles = SignUpBtnStyles();
  return (
    <Button variant="contained" sx={styles.signUpBtn}>
      Sign up
    </Button>
  );
}
