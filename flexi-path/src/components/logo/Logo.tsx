import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LogoImage from '../../assets/logo-image.png';
import LogoStyles from './LogoStyles';

type LogoProps = {
  handleEndQuiz: () => void;
};

export default function Logo({ handleEndQuiz }: LogoProps) {
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
