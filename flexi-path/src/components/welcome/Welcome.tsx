import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import img1 from '../../assets/list-item-img.png';
import img2 from '../../assets/list-item-img2.png';
import img3 from '../../assets/list-item-img3.png';
import WelcomeStyles from './WelcomeStyles';

export default function Welcome() {
  const styles = WelcomeStyles();

  const listData = [
    {
      primary: 'Tell us about yourself.',
      secondary: 'Share some basic info and your educational mindset.',
      img: img3,
      alt: 'Tell me about you image',
      imgStyle: styles.listImg1,
    },
    {
      primary: 'Tell us about the educational path you are seeking.',
      secondary:
        'For example, structured curriculum, time and flexibility, sociability.',
      img: img1,
      alt: 'Stack of books',
      imgStyle: styles.listImg2,
    },
    {
      primary: 'Explore your educational options.',
      secondary: 'Home School, Private School, Charter School.',
      img: img2,
      alt: 'Exploring school options graphic',
      imgStyle: styles.listImg3,
    },
  ];

  return (
    <Box sx={styles.welcomeContainer}>
      <Box sx={styles.getStartedCtaContainer}>
        <Typography component={'h1'} sx={styles.getStartedCta}>
          It's easy to get started with the Wizard
        </Typography>
      </Box>
      <Box sx={styles.instructionsContainer}>
        <List sx={styles.instructions}>
          {listData.map((item, index) => (
            <ListItem key={index} sx={styles.listItem}>
              <Box sx={styles.listItemContainer}>
                <ListItemText
                  primary={item.primary}
                  secondary={item.secondary}
                  primaryTypographyProps={{ sx: styles.primaryText }}
                  secondaryTypographyProps={{ sx: styles.secondaryText }}
                />
                <Box
                  component="img"
                  src={item.img}
                  alt={item.alt}
                  sx={item.imgStyle}
                />
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}
