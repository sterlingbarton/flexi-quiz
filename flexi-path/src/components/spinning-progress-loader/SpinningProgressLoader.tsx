import { Box, CircularProgress, Typography } from '@mui/material';
import SpinningProgressLoaderStyles from './SpinningProgressLoaderStyles';
import { useEffect, useState } from 'react';

export default function SpinningProgressLoader() {
  const [progressValue, setProgressValue] = useState(0);
  const styles = SpinningProgressLoaderStyles();
  useEffect(() => {
    setTimeout(() => {
      if (progressValue < 100) {
        setProgressValue(progressValue + 1);
      }
    }, 65);
  }, [progressValue]);

  return (
    <Box sx={styles.container}>
      <CircularProgress
        sx={styles.progressLoader}
        size={300}
        variant="determinate"
        value={progressValue}
      />
      <Box sx={styles.contentsContainer}>
        <Typography sx={styles.value}>{progressValue}%</Typography>
      </Box>
    </Box>
  );
}
