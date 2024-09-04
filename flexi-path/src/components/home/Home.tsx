import { useState } from 'react';
import { Box } from '@mui/material';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Welcome from '../welcome/Welcome';
import HalfwayMarker from '../halfway-marker/HalfwayMarker';
import Quiz from '../quiz/Quiz';
import SaveAndExitDialog from '../save-and-exit-dialog/SaveAndExitDialog';
import HomeStyles from './HomeStyles';
import data, { QuizData } from '../../data';

export default function Home() {
  const styles = HomeStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [quizState, setQuizState] = useState({
    quizStart: false,
    currentQuestion: 0,
    isHalfway: false,
    progress: 0,
  });
  const [quizData, setQuizData] = useState<QuizData[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<number[][]>([]);

  const totalQuestions = quizData.length;
  const totalPages = totalQuestions + 1;
  const halfway = Math.floor(totalPages / 2);

  const handleStartQuiz = () => {
    setQuizState({
      quizStart: true,
      currentQuestion: 1,
      isHalfway: false,
      progress: 0,
    });
    setQuizData(data);
    // create new array with length === data.length
    // then fill each index with empty array
    const nestedArray = Array.from({ length: data.length }, () => []);
    setSelectedAnswers(nestedArray);
  };

  const handleEndQuiz = () => {
    // this is where we will save the users data before ending the quiz
    if (dialogOpen) {
      setDialogOpen(false);
    }
    setQuizState({
      quizStart: false,
      currentQuestion: 0,
      isHalfway: false,
      progress: 0,
    });
    setSelectedAnswers([]);
    console.log(selectedAnswers);
  };

  const handleNextPage = () => {
    setQuizState((prev) => {
      const nextQuestion = prev.currentQuestion + 1;
      // if at end of quiz prevent question incrementation
      if (nextQuestion > totalQuestions) return prev;
      // if next question is halfway point and not currently halfway,
      // render halfway marker, don't increment currentQuestion
      if (nextQuestion === halfway && !prev.isHalfway) {
        return {
          ...prev,
          isHalfway: true,
          progress: (prev.currentQuestion / totalPages) * 100,
        };
      } else {
        // if current question is halfway point
        if (prev.isHalfway) {
          return {
            ...prev,
            currentQuestion: nextQuestion,
            isHalfway: false,
            progress: (nextQuestion / totalPages) * 100,
          };
        } else {
          // anything else, increment question and progress
          return {
            ...prev,
            currentQuestion: nextQuestion,
            isHalfway: false,
            progress: (nextQuestion / totalPages) * 100,
          };
        }
      }
    });
  };

  const handleBackPage = () => {
    setQuizState((prev) => {
      const futureQuestion = prev.currentQuestion - 1;
      // if future question is past the beginning of quiz,
      // prevent question decrementation
      if (futureQuestion <= 0) return prev;
      // if currently at halfway point
      if (prev.isHalfway) {
        return {
          ...prev,
          isHalfway: false,
          progress: (prev.currentQuestion / totalPages) * 100,
        };
      } else {
        // if future question is halfway point
        if (prev.currentQuestion === halfway) {
          return {
            ...prev,
            currentQuestion: futureQuestion,
            isHalfway: true,
            progress: (prev.currentQuestion / totalPages) * 100,
          };
        } else {
          // anything else
          return {
            ...prev,
            currentQuestion: futureQuestion,
            progress: (futureQuestion / totalPages) * 100,
          };
        }
      }
    });
  };

  const handleAnswerSelect = (newSelectIndex: number) => {
    setSelectedAnswers((prevSelected) =>
      prevSelected.map((selectedAnswers, selectedAnswersIndex) => {
        // only modify the selections of the current question
        if (selectedAnswersIndex === quizState.currentQuestion - 1) {
          if (selectedAnswers.includes(newSelectIndex)) {
            // remove selection if already selected
            return selectedAnswers.filter(
              (element) => element !== newSelectIndex
            );
          } else {
            // add selection if not already selected
            return [...selectedAnswers, newSelectIndex];
          }
        } else {
          // if selectedAnswersIndex !== quizState.currentQuestion - 1
          // return array with no changes
          return selectedAnswers;
        }
      })
    );
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const renderLayout = () => {
    if (!quizState.quizStart) return <Welcome />;
    if (quizState.isHalfway) return <HalfwayMarker />;
    return (
      <Quiz
        currentQuestion={quizData[quizState.currentQuestion - 1]}
        handleAnswerSelect={handleAnswerSelect}
        selectedAnswers={selectedAnswers[quizState.currentQuestion - 1]}
      />
    );
  };

  return (
    <Box sx={styles.homeContainer}>
      <Header
        quizStart={quizState.quizStart}
        handleDialogOpen={handleDialogOpen}
        handleEndQuiz={handleEndQuiz}
      />
      <Box sx={styles.homeContent}>{renderLayout()}</Box>
      <Footer
        quizStart={quizState.quizStart}
        handleStartQuiz={handleStartQuiz}
        handleBackPage={handleBackPage}
        handleNextPage={handleNextPage}
        progress={quizState.progress}
      />
      <SaveAndExitDialog
        open={dialogOpen}
        setDialogOpen={setDialogOpen}
        handleEndQuiz={handleEndQuiz}
      />
    </Box>
  );
}
