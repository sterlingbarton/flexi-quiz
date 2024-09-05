import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data, { QuizData } from '../data';

interface QuizStateContextProps {
  children: React.ReactNode;
}

interface QuizState {
  quizStart: boolean;
  currentQuestion: number;
  isHalfway: boolean;
  progress: number;
}

interface QuizStateContextType {
  quizState: QuizState;
  setQuizState: React.Dispatch<React.SetStateAction<QuizState>>;
  quizData: QuizData[];
  setQuizData: React.Dispatch<React.SetStateAction<QuizData[]>>;
  handleStartQuiz: () => void;
  handleEndQuiz: () => void;
  handleNextPage: () => void;
  handleBackPage: () => void;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  dialogOpen: boolean;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentQuestion: QuizData;
  totalQuestions: number;
  totalPages: number;
  halfway: number;
  handleAnswerSelect: (newSelectIndex: number) => void;
  selectedAnswers: number[][];
  setSelectedAnswers: React.Dispatch<React.SetStateAction<number[][]>>;
  currentSelectedAnswers: number[];
}

export const QuizStateContext = createContext<
  QuizStateContextType | Record<string, never>
>({});

export const QuizStateProvider = ({ children }: QuizStateContextProps) => {
  const [quizState, setQuizState] = useState<QuizState>({
    quizStart: false,
    currentQuestion: 0,
    isHalfway: false,
    progress: 0,
  });
  const [quizData, setQuizData] = useState<QuizData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<number[][]>([]);

  const currentSelectedAnswers = selectedAnswers[quizState.currentQuestion - 1];
  const currentQuestion = quizData[quizState.currentQuestion - 1];
  const totalQuestions = quizData.length;
  const totalPages = totalQuestions + 1;
  const halfway = Math.floor(totalPages / 2);
  const navigate = useNavigate();

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
    // console.log(selectedAnswers);
  };

  const handleNextPage = () => {
    setQuizState((prev) => {
      const nextQuestion = prev.currentQuestion + 1;
      // if at end of quiz prevent question incrementation
      if (nextQuestion > totalQuestions) {
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          navigate('/results');
        }, 2500);
        return prev;
      }
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

  return (
    <QuizStateContext.Provider
      value={{
        quizState,
        setQuizState,
        quizData,
        setQuizData,
        handleStartQuiz,
        handleEndQuiz,
        handleNextPage,
        handleBackPage,
        isLoading,
        setIsLoading,
        dialogOpen,
        setDialogOpen,
        currentQuestion,
        totalQuestions,
        totalPages,
        halfway,
        handleAnswerSelect,
        selectedAnswers,
        setSelectedAnswers,
        currentSelectedAnswers,
      }}
    >
      {children}
    </QuizStateContext.Provider>
  );
};
