import { Container, Typography, Box, Stack } from '@mui/material';
import study from '../../assets/undraw_studying.png';
import ResultsDisplayStyles from './ResultsDisplayStyles';

export default function ResultsDisplay() {
  const styles = ResultsDisplayStyles();
  return (
    <Container sx={styles.resultsDisplayContainer}>
      <Stack direction={'column'} gap={1} sx={styles.headingContainer}>
        <Typography component={'h1'} sx={styles.header}>
          Flexi Path Wizard Complete!
        </Typography>
        <Typography component={'h3'} sx={styles.subHeader}>
          Your child’s educational path is:
        </Typography>
        <Typography component={'h2'} sx={styles.result}>
          Home School
        </Typography>
      </Stack>
      <Box
        component={'img'}
        src={study}
        alt={'Graphic of a woman studying'}
        sx={styles.resultImg}
      />
      <Typography component={'p'} sx={styles.resultDetails}>
        Homeschooling offers a tailored education that caters to your child's
        unique learning style, allowing for a flexible and personalized learning
        experience.
      </Typography>
    </Container>
  );
}
