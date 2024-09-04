import { Button } from '@mui/material';
import BackBtnStyles from './BackBtnStyles';

type BackBtnProps = {
  handleBackPage: () => void;
};

export default function BackBtn({ handleBackPage }: BackBtnProps) {
  const styles = BackBtnStyles();
  return (
    <Button variant="text" sx={styles.quizBackBtn} onClick={handleBackPage}>
      Back
    </Button>
  );
}
