import { Box } from '@mui/material';
import Logo from '../logo/Logo';
import SaveAndExitBtn from '../buttons/save-and-exit-btn/SaveAndExitBtn';
import HeaderStyles from './HeaderStyles';

type HeaderProps = {
  quizStart: boolean;
  handleDialogOpen: () => void;
  handleEndQuiz: () => void;
};

export default function Header({
  quizStart,
  handleDialogOpen,
  handleEndQuiz,
}: HeaderProps) {
  const styles = HeaderStyles();
  return (
    <Box sx={styles.header}>
      <Logo handleEndQuiz={handleEndQuiz} />
      {quizStart && <SaveAndExitBtn handleDialogOpen={handleDialogOpen} />}
    </Box>
  );
}
