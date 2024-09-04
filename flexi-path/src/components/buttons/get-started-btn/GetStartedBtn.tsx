import { Button } from '@mui/material';
import GetStartedBtnStyles from './GetStartedBtnStyles';

type GetStartedBtnProps = {
  handleStartQuiz: () => void;
};

export default function GetStartedBtn({ handleStartQuiz }: GetStartedBtnProps) {
  const styles = GetStartedBtnStyles();
  return (
    <Button
      variant="contained"
      sx={styles.getStartedBtn}
      onClick={handleStartQuiz}
    >
      Get Started
    </Button>
  );
}
