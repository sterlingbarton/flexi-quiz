import { useContext } from 'react';
import { Box } from '@mui/material';
import { QuizStateContext } from '../../context/QuizStateContext';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import SaveAndExitDialog from '../save-and-exit-dialog/SaveAndExitDialog';
import QuizLayoutStyles from './QuizLayoutStyles';

interface QuizLayoutProps {
  children: React.ReactNode;
}

export default function QuizLayout({ children }: QuizLayoutProps) {
  const { isLoading } = useContext(QuizStateContext);
  const styles = QuizLayoutStyles();

  return (
    <Box sx={styles.layoutContainer}>
      {!isLoading && <Header />}
      {children}
      {!isLoading && (
        <>
          <Footer />
          <SaveAndExitDialog />
        </>
      )}
    </Box>
  );
}
