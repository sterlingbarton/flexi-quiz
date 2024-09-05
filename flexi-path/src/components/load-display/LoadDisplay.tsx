import SpinningProgressLoader from '../spinning-progress-loader/SpinningProgressLoader';
import { Typography, Box } from '@mui/material';
import LoadDisplayStyles from './LoadDisplayStyles';

export default function LoadDisplay() {
  const styles = LoadDisplayStyles();
  return (
    <Box sx={styles.bodyContainer}>
      <Box sx={styles.centerContainer}>
        <Typography component={'h1'} sx={styles.header}>
          Preparing your plan
        </Typography>
        <SpinningProgressLoader />
        <Typography component={'p'} sx={styles.description}>
          Thank you for completing the questionnaire. We're analyzing your
          responses to tailor the best learning options for your child. Please
          be patient as we prepare your results.
        </Typography>
      </Box>
    </Box>
  );
}
