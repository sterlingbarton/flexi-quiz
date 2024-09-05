import { useContext } from 'react';
import { Box, LinearProgress } from '@mui/material';
import { QuizStateContext } from '../../context/QuizStateContext';
import NextBtn from '../buttons/next-btn/NextBtn';
import BackBtn from '../buttons/back-btn/BackBtn';
import GetStartedBtn from '../buttons/get-started-btn/GetStartedBtn';
import FooterStyles from './FooterStyles';

export default function Footer() {
  const styles = FooterStyles();
  const { quizState } = useContext(QuizStateContext);

  return (
    <Box sx={styles.footer}>
      <LinearProgress
        variant="determinate"
        value={quizState.progress}
        sx={styles.progressBar}
      />
      <Box sx={styles.buttonContainer}>
        {quizState.quizStart ? (
          <>
            <Box sx={styles.backButton}>
              <BackBtn />
            </Box>
            <Box sx={styles.nextButton}>
              <NextBtn />
            </Box>
          </>
        ) : (
          <Box sx={styles.getStartedButton}>
            <GetStartedBtn />
          </Box>
        )}
      </Box>
    </Box>
  );
}
