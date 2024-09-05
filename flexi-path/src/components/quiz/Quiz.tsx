import { useContext } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { QuizStateContext } from '../../context/QuizStateContext';
import Card from '../card/Card';
import QuizStyles from './QuizStyles';

export default function Quiz() {
  const { currentQuestion, handleAnswerSelect, currentSelectedAnswers } =
    useContext(QuizStateContext);
  const styles = QuizStyles();

  const totalAnswers = currentQuestion.longAnswers.length;
  const orientation = currentQuestion.orientation;

  // dynamically render rows and columns of grid
  const getGridProps = (orientation: string) => {
    switch (orientation) {
      case 'vertical':
        return { xs: 6, md: 2.4 };
      case 'horizontal':
        return { xs: 12, md: 6 };
      case 'square':
        return totalAnswers % 5 === 0 ? { xs: 6, md: 2.4 } : { xs: 6, md: 3 };
      default:
        return { xs: 12, md: 6 };
    }
  };

  const gridProps = getGridProps(orientation);

  return (
    <Box sx={styles.quizContainer}>
      <Typography sx={styles.question}>{currentQuestion.question}</Typography>
      <Grid container sx={styles.gridContainer}>
        {currentQuestion.longAnswers.map(
          (answer: string, answerIndex: number) => (
            <Grid item key={answerIndex} {...gridProps} sx={styles.answer}>
              <Card
                orientation={orientation}
                title={currentQuestion.shortAnswers?.[answerIndex]}
                body={answer}
                emoji={currentQuestion.emojis?.[answerIndex]}
                handleAnswerSelect={() => handleAnswerSelect(answerIndex)}
                isSelected={currentSelectedAnswers?.includes(answerIndex)}
              />
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
}
