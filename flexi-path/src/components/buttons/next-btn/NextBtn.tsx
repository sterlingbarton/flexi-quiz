import { Button } from '@mui/material';
import NextBtnStyles from './NextBtnStyles';

type NextBtnProps = {
  handleNextPage: () => void;
};

export default function NextBtn({ handleNextPage }: NextBtnProps) {
  const styles = NextBtnStyles();
  return (
    <Button
      variant="contained"
      sx={styles.quizNextBtn}
      onClick={handleNextPage}
    >
      Next
    </Button>
  );
}
