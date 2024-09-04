import { Box, Typography } from '@mui/material';
import ResultsChart from '../results-chart/ResultsChart';
import ResultsScoreDisplayStyles from './ResultsScoreDisplayStyles';

export default function ResultsScoreDisplay() {
  const styles = ResultsScoreDisplayStyles();
  return (
    <Box sx={styles.scoreDisplayContainer}>
      <Typography component={'h1'} sx={styles.scoreDisplayHeader}>
        Your Educational Path Score
      </Typography>
      <ResultsChart />
      <Box sx={styles.captionContainer}>
        <Typography component={'p'} sx={styles.caption}>
          The test results demonstrate that homeschooling stands as the most
          beneficial option, tailored educational experiences.
        </Typography>
      </Box>
    </Box>
  );
}
