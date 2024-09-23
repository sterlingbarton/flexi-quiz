import { Button } from '@mui/material';
import SignUpBtnStyles from './SignUpBtnStyles';
import { useNavigate } from 'react-router-dom';

export function SignUpBtn() {
  const styles = SignUpBtnStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/sign-up');
  };

  return (
    <Button variant="contained" sx={styles.signUpBtn} onClick={handleClick}>
      Sign up
    </Button>
  );
}

export function DarkNavSignUpBtn() {
  const styles = SignUpBtnStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/sign-up');
  };

  return (
    <Button
      variant="outlined"
      sx={styles.darkNavSignUpBtn}
      onClick={handleClick}
    >
      Sign up
    </Button>
  );
}
