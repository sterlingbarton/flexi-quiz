import { Box, Typography, Button } from '@mui/material';
import Subscribe from '../../assets/undraw_subscribe.png';

export default function AccountPrompt() {
  return (
    <Box
      // styles.promptContainer
      sx={{
        width: '90%',
        maxWidth: '25rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '2rem auto',
      }}
    >
      <Typography
        component="h3"
        // styles.heading
        sx={{
          color: '#202020',
          fontSize: '1rem',
          fontWeight: 600,
          mb: '2rem',
        }}
      >
        Just a moment...
      </Typography>
      <Box
        component={'img'}
        src={Subscribe}
        // styles.img
        sx={{ width: '10rem', height: '7rem', flexShrink: 0, mb: '2.2rem' }}
      />
      <Typography
        component="p"
        // styles.paragraph
        sx={{
          color: '#202020',
          fontSize: '0.875rem',
          fontWeight: 300,
          lineHeight: '121.017%',
          mb: '1.8rem',
        }}
      >
        We've just emailed you your results. Now, let's gather some personal
        details to set up your account.
      </Typography>
      <Button
        type="submit"
        variant="contained"
        // styles.setUpBtn
        sx={{
          width: '100%',
        }}
      >
        Set up my account
      </Button>
    </Box>
  );
}
