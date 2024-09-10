import { useContext } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { QuizStateContext } from '../../context/QuizStateContext';
import LogoImage from '../../assets/logo-image.png';
import DarkLogoImg from '../../assets/dark-logo.png';
import LogoStyles from './LogoStyles';

export function Logo() {
  const { handleEndQuiz } = useContext(QuizStateContext);
  const navigate = useNavigate();
  const styles = LogoStyles();

  const handleLogoClick = () => {
    handleEndQuiz();
    navigate('/');
  };

  return (
    <Box
      component="img"
      src={LogoImage}
      alt={'FlexiPath logo'}
      onClick={handleLogoClick}
      sx={styles.logo}
    />
  );
}

export function DarkLogo() {
  const { handleEndQuiz } = useContext(QuizStateContext);
  const navigate = useNavigate();
  const styles = LogoStyles();

  const handleLogoClick = () => {
    handleEndQuiz();
    navigate('/');
  };

  return (
    <Box
      component="img"
      src={DarkLogoImg}
      alt={'FlexiPath logo'}
      onClick={handleLogoClick}
      sx={styles.logo}
    />
  );
}
