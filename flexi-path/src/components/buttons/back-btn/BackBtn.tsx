import { useContext } from 'react';
import { Button } from '@mui/material';
import { QuizStateContext } from '../../../context/QuizStateContext';
import BackBtnStyles from './BackBtnStyles';

export default function BackBtn() {
  const { handleBackPage } = useContext(QuizStateContext);
  const styles = BackBtnStyles();
  return (
    <Button variant="text" sx={styles.quizBackBtn} onClick={handleBackPage}>
      Back
    </Button>
  );
}
