import { useTheme } from '@mui/material/styles';

type Orientation = 'square' | 'horizontal' | 'vertical';

const CardStyles = (orientation: Orientation) => {
  const theme = useTheme();
  const baseStyles = {
    cardContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      border: '1px solid silver',
      borderRadius: theme.shape,
      '&:hover': {
        cursor: 'pointer',
        boxShadow:
          'rgba(22, 88, 203, 0.15) 0px 4px 4px 2px, rgba(0, 0, 0, 0.1) 0px 3px 3px -1px;',
      },
    },
    title: {
      color: theme.palette.primary.main,
      fontSize: { xs: '.9rem', md: '1rem' },
      fontWeight: '800',
    },
    body: {
      fontSize: { xs: '.7rem', md: '.8rem', xl: '1rem' },
      fontWeight: '300',
    },
  };
  const orientationStyles = {
    square: {
      cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: { xs: '12rem', sm: '12.5rem', md: '11rem', lg: '13rem' },
        height: { xs: '7rem', md: '10rem', lg: '11rem', xl: '12rem' },
        padding: { xs: '.25rem', md: '.5rem', xl: '2rem .6rem' },
        gap: { xs: 0, lg: '.5rem' },
        textAlign: 'center',
      },
    },
    horizontal: {
      cardContainer: {
        alignItems: 'flex-start',
        width: {
          xs: '24rem',
          sm: '26rem',
          md: '28rem',
          lg: '32rem',
          xl: '38rem',
        },
        height: { xs: '7rem', md: '8rem', xl: '9rem' },
        padding: { xs: '0rem 1.5rem', lg: '1rem 2rem' },
        gap: '.3rem',
      },
    },
    vertical: {
      cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: {
          xs: '10rem',
          sm: '12rem',
          md: '11rem',
          lg: '12.5rem',
          xl: '14rem',
        },
        height: { xs: '12rem', md: '15rem', xl: '18rem' },
        padding: '0 .8rem',
        gap: { xs: '.5rem', lg: '1rem' },
        textAlign: 'center',
      },
      smileyImg: {
        margin: '0 auto',
        width: { xs: '4rem', xl: '5rem' },
        height: { xs: '4rem', xl: '5rem' },
      },
    },
  };
  const combinedStyles = {
    ...baseStyles,
    cardContainer: {
      ...baseStyles.cardContainer,
      ...orientationStyles[orientation].cardContainer,
    },
    ...(orientation === 'vertical' && {
      smileyImg: orientationStyles.vertical.smileyImg,
    }),
  };
  return combinedStyles;
};

export default CardStyles;
