import { useContext } from 'react';
import { QuizStateContext } from '../../context/QuizStateContext';
import Welcome from '../welcome/Welcome';
import HalfwayMarker from '../halfway-marker/HalfwayMarker';
import LoadDisplay from '../load-display/LoadDisplay';
import QuizLayout from '../quiz-layout/QuizLayout';
import QuizGrid from '../quiz-grid/QuizGrid';

export default function Quiz() {
  const { quizState, isLoading } = useContext(QuizStateContext);

  const renderLayout = () => {
    if (isLoading) return <LoadDisplay />;
    if (!quizState.quizStart) return <Welcome />;
    if (quizState.isHalfway) return <HalfwayMarker />;
    return <QuizGrid />;
  };

  return <QuizLayout>{renderLayout()}</QuizLayout>;
}
