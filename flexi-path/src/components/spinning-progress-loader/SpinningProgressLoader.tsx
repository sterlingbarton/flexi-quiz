import { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import InsightsIcon from '@mui/icons-material/Insights';
import SpinningProgressLoaderStyles from './SpinningProgressLoaderStyles';

export default function SpinningProgressLoader() {
  const [progressValue, setProgressValue] = useState(0);
  const styles = SpinningProgressLoaderStyles();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progressValue < 100) {
        setProgressValue(progressValue + 1);
      }
    }, 20);

    return () => clearTimeout(timer);
  }, [progressValue]);

  return (
    <Box sx={styles.container}>
      <CircularProgress
        sx={styles.progressLoader}
        size={200}
        variant="determinate"
        value={progressValue}
      />
      <Box sx={styles.contentsContainer}>
        <InsightsIcon sx={styles.icon} />
        <Typography sx={styles.value}>{progressValue}%</Typography>
      </Box>
    </Box>
  );
}
