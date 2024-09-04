import { Box, LinearProgress } from '@mui/material';
import NextBtn from '../buttons/next-btn/NextBtn';
import BackBtn from '../buttons/back-btn/BackBtn';
import GetStartedBtn from '../buttons/get-started-btn/GetStartedBtn';
import FooterStyles from './FooterStyles';

type FooterProps = {
  quizStart: boolean;
  handleStartQuiz: () => void;
  handleBackPage: () => void;
  handleNextPage: () => void;
  progress: number;
};

export default function Footer({
  quizStart,
  handleStartQuiz,
  handleBackPage,
  handleNextPage,
  progress,
}: FooterProps) {
  const styles = FooterStyles();

  return (
    <Box sx={styles.footer}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={styles.progressBar}
      />
      <Box sx={styles.buttonContainer}>
        {quizStart ? (
          <>
            <Box sx={styles.backButton}>
              <BackBtn handleBackPage={handleBackPage} />
            </Box>
            <Box sx={styles.nextButton}>
              <NextBtn handleNextPage={handleNextPage} />
            </Box>
          </>
        ) : (
          <Box sx={styles.getStartedButton}>
            <GetStartedBtn handleStartQuiz={handleStartQuiz} />
          </Box>
        )}
      </Box>
    </Box>
  );
}
