import { Box, Typography, Button } from '@mui/material';
import Subscribe from '../../assets/undraw_subscribe.png';
import Education from '../../assets/undraw_education.png';
import AccountPromptStyles from './AccountPromptStyles';
import { useNavigate } from 'react-router-dom';

interface AccountPromptProps {
  emailSendAction: boolean;
}

export default function AccountPrompt({ emailSendAction }: AccountPromptProps) {
  const navigate = useNavigate();
  const styles = AccountPromptStyles();

  const handleClick = () => {
    navigate('/sign-up');
  };

  return (
    <Box sx={styles.promptContainer}>
      <Typography component="h3" sx={styles.heading}>
        Just a moment...
      </Typography>
      <Box
        component={'img'}
        src={emailSendAction ? Subscribe : Education}
        sx={styles.img}
      />
      <Typography component="p" sx={styles.paragraph}>
        {emailSendAction
          ? "We've just emailed you your results. Now, let's gather some personal details to set up your account."
          : "You’ve completed the assessment to see your child's path recommendation. Now, let's gather some personal details to set up your account."}
      </Typography>
      <Button
        type="submit"
        variant="contained"
        sx={styles.setUpBtn}
        onClick={handleClick}
      >
        Set up my account
      </Button>
    </Box>
  );
}
