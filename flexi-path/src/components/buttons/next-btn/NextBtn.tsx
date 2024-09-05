import { useContext } from 'react';
import { Button } from '@mui/material';
import { QuizStateContext } from '../../../context/QuizStateContext';
import NextBtnStyles from './NextBtnStyles';

export default function NextBtn() {
  const { handleNextPage } = useContext(QuizStateContext);
  const styles = NextBtnStyles();
  return (
    <Button
      variant="contained"
      sx={styles.quizNextBtn}
      onClick={handleNextPage}
    >
      Next
    </Button>
  );
}
