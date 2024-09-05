import { useContext } from 'react';
import { Box } from '@mui/material';
import { QuizStateContext } from '../../context/QuizStateContext';
import QuizLayout from '../quiz-layout/QuizLayout';
import Welcome from '../welcome/Welcome';
import HalfwayMarker from '../halfway-marker/HalfwayMarker';
import Quiz from '../quiz/Quiz';
import LoadDisplay from '../load-display/LoadDisplay';
import HomeStyles from './HomeStyles';

export default function Home() {
  const { quizState, isLoading } = useContext(QuizStateContext);

  const styles = HomeStyles();

  const renderLayout = () => {
    if (isLoading) return <LoadDisplay />;
    if (!quizState.quizStart) return <Welcome />;
    if (quizState.isHalfway) return <HalfwayMarker />;
    return <Quiz />;
  };

  return (
    <QuizLayout>
      <Box sx={styles.homeContent}>{renderLayout()}</Box>
    </QuizLayout>
  );
}
