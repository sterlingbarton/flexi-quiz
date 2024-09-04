import { Box, Typography, Grid } from '@mui/material';
import Card from '../card/Card';
import QuizStyles from './QuizStyles';
import { QuizData } from '../../data';

type QuizProps = {
  currentQuestion: QuizData;
  handleAnswerSelect: (index: number) => void;
  selectedAnswers: number[];
};

export default function Quiz({
  currentQuestion,
  handleAnswerSelect,
  selectedAnswers,
}: QuizProps) {
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
                isSelected={selectedAnswers.includes(answerIndex)}
              />
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
}
