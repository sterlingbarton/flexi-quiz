import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Nav from '../nav/Nav';
import hero from '../../assets/hero.png';
import HomeStyles from './HomeStyles';

export default function NewHome() {
  const navigate = useNavigate();
  const styles = HomeStyles();
  return (
    <Box sx={styles.homePageContainer}>
      <Nav />
      <Box sx={styles.bodyContainer}>
        <Box sx={styles.vendorBtnContainer}>
          <Button
            variant="text"
            endIcon={<ArrowForwardIcon />}
            sx={styles.vendorBtn}
          >
            Vendor Portal
          </Button>
        </Box>
        <Box sx={styles.pageContent}>
          <Box sx={styles.ctaColumn}>
            <Box sx={styles.ctaContent}>
              <Typography component={'h1'} sx={styles.heading}>
                Explore resources to guide your child onto the right path.
              </Typography>
              <Typography component={'h3'} sx={styles.subheading}>
                Take our pathway quiz to discover the best schooling option for
                your child.
              </Typography>
              <Button
                variant="contained"
                sx={styles.ctaBtn}
                onClick={() => navigate('/quiz')}
              >
                Get started for free
              </Button>
            </Box>
          </Box>
          <Box sx={styles.imgColumn}>
            <Box sx={styles.imgColumnContent}>
              <Box sx={styles.imgBackdrop}> </Box>
              <Box component={'img'} src={hero} sx={styles.img} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
