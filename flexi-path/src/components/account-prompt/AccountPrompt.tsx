import { Box, Typography, Button } from '@mui/material';
import Subscribe from '../../assets/undraw_subscribe.png';
import AccountPromptStyles from './AccountPromptStyles';

export default function AccountPrompt() {
  const styles = AccountPromptStyles();
  return (
    <Box sx={styles.promptContainer}>
      <Typography component="h3" sx={styles.heading}>
        Just a moment...
      </Typography>
      <Box component={'img'} src={Subscribe} sx={styles.img} />
      <Typography component="p" sx={styles.paragraph}>
        We've just emailed you your results. Now, let's gather some personal
        details to set up your account.
      </Typography>
      <Button type="submit" variant="contained" sx={styles.setUpBtn}>
        Set up my account
      </Button>
    </Box>
  );
}
