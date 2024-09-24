import { Button, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ResultsNavigationStyles from './ResultsNavigationStyles';

type ResultsNavigationProps = {
  handleNext: () => void;
  handleBack: () => void;
  renderDots: () => JSX.Element[];
  currentPage: number;
  totalPages: number;
};

export default function ResultsNavigation({
  handleNext,
  handleBack,
  renderDots,
  currentPage,
  totalPages,
}: ResultsNavigationProps) {
  const styles = ResultsNavigationStyles();

  return (
    <Box sx={styles.navigationContainer}>
      <Button
        variant="text"
        sx={{
          ...styles.resultsBackBtn,
          visibility:
            currentPage < 1 || currentPage === totalPages - 1
              ? 'hidden'
              : 'visible',
        }}
        startIcon={<ArrowBackIcon />}
        onClick={handleBack}
      >
        Back
      </Button>
      <Box sx={styles.dotsContainer}>{renderDots()}</Box>
      <Button
        variant="contained"
        sx={{
          ...styles.resultsNextBtn,
          visibility: currentPage === totalPages - 1 ? 'hidden' : 'visible',
        }}
        onClick={handleNext}
      >
        Next
      </Button>
    </Box>
  );
}
