import { useState } from 'react';
import { Container, Box } from '@mui/material';
import ResultsStyles from './ResultsStyles';
import ResultsDisplay from '../results-display/ResultsDisplay';
import ResultsNavigation from '../results-navigation/ResultsNavigation';
import ResultsScoreDisplay from '../results-score-display/ResultsScoreDisplay';
import Nav from '../nav/Nav';
import Email from '../email/Email';

export default function Results() {
  const styles = ResultsStyles();
  const components = [
    // As more components are built, they will be added here
    <ResultsDisplay />,
    <ResultsScoreDisplay />,
    <Email />,
  ];
  const totalPages = components.length;
  const [currentPage, setCurrentPage] = useState(0);
  const renderDots = () => {
    return Array.from({ length: totalPages }).map((_, index) => (
      <Box
        key={index}
        sx={{
          ...styles.dot,
          backgroundColor: currentPage === index ? 'primary.main' : 'grey.400',
        }}
      />
    ));
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBack = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Box sx={styles.pageContainer}>
      <Nav />
      <Box sx={styles.bodyContainer}>
        <Container sx={styles.displayContainer}>
          {components[currentPage]}
          <ResultsNavigation
            handleBack={handleBack}
            handleNext={handleNext}
            renderDots={renderDots}
            currentPage={currentPage}
          />
        </Container>
      </Box>
    </Box>
  );
}
