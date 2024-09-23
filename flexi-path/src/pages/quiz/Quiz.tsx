import { useContext } from 'react';
import { QuizStateContext } from '../../context/QuizStateContext';
import Welcome from '../../components/welcome/Welcome';
import HalfwayMarker from '../../components/halfway-marker/HalfwayMarker';
import LoadDisplay from '../../components/load-display/LoadDisplay';
import QuizLayout from '../../components/quiz-layout/QuizLayout';
import QuizGrid from '../../components/quiz-grid/QuizGrid';

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
