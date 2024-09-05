import { useContext } from 'react';
import { Button } from '@mui/material';
import { QuizStateContext } from '../../../context/QuizStateContext';
import GetStartedBtnStyles from './GetStartedBtnStyles';

export default function GetStartedBtn() {
  const { handleStartQuiz } = useContext(QuizStateContext);
  const styles = GetStartedBtnStyles();
  return (
    <Button
      variant="contained"
      sx={styles.getStartedBtn}
      onClick={handleStartQuiz}
    >
      Get Started
    </Button>
  );
}
