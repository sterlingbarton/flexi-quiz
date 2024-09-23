import { Button } from '@mui/material';
import LogInBtnStyles from './LogInBtnStyles';
import { useNavigate } from 'react-router-dom';

export function LogInBtn() {
  const styles = LogInBtnStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/log-in');
  };

  return (
    <Button variant="outlined" sx={styles.logInBtn} onClick={handleClick}>
      Log In
    </Button>
  );
}

export function DarkNavLogInBtn() {
  const styles = LogInBtnStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/log-in');
  };

  return (
    <Button variant="text" sx={styles.darkLogInBtn} onClick={handleClick}>
      Log In
    </Button>
  );
}
