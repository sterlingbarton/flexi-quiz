import { useTheme } from '@mui/material/styles';

const WelcomeStyles = () => {
  const theme = useTheme();
  const styles = {
    welcomeContainer: {
      display: 'flex',
      flexDirection: { xs: 'column', lg: 'row' },
      justifyContent: { xs: 'center', lg: 'space-between' },
      alignItems: 'center',
      margin: '0 auto',
      width: { xs: '90%', md: '75%', lg: '85%', xl: '80%' },
      height: { lg: '100%' },
    },
    getStartedCtaContainer: {
      display: 'flex',
      alignItems: 'center',
      width: { xs: '90%', md: '70%', lg: '40%' },
      height: { xs: '40%', lg: '100%' },
      textAlign: { xs: 'center', lg: 'left' },
      my: { xs: '2rem', lg: 0 },
    },
    getStartedCta: {
      color: theme.palette.primary.main,
      fontSize: { xs: '3rem', sm: '3.5rem', lg: '4.2rem' },
      fontWeight: { xs: 700, lg: 600 },
      lineHeight: 'normal',
      letterSpacing: { xs: '0.2rem', sm: '0.3rem' },
    },
    instructionsContainer: {
      display: 'flex',
      alignItems: { xs: 'flex-start', lg: 'center' },
      width: { xs: '100%', sm: '85%', lg: '55%' },
      height: { xs: '40%', lg: '100%' },
    },
    instructions: {
      listStyle: 'decimal',
      pl: 4,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: '100%',
      width: '100%',
      margin: '0 auto',
    },
    listItem: {
      display: 'list-item',
      '&::marker': {
        color: theme.palette.primary.main,
        fontWeight: 600,
        fontSize: { sm: '1rem', md: '1.2rem', xl: '1.4rem' },
      },
    },
    listItemContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    primaryText: {
      fontSize: { sm: '1rem', md: '1.2rem', xl: '1.4rem' },
      fontWeight: 600,
      color: theme.palette.primary.main,
    },
    secondaryText: {
      fontWeight: 400,
      fontSize: { sm: '.9rem', md: '1rem', xl: '1.4rem' },
      color: '#626262',
      letterSpacing: '-0.05rem',
    },
    listImg1: {
      width: '6.5rem',
      height: '5.5rem',
    },
    listImg2: {
      width: '5.2rem',
      height: '5.4rem',
    },
    listImg3: {
      width: '6rem',
      height: '6rem',
    },
  };
  return styles;
};

export default WelcomeStyles;
