import { useTheme } from '@mui/material/styles';

const HalfwayMarkerStyles = () => {
  const theme = useTheme();
  const styles = {
    halfContainer: {
      width: '60%',
      margin: 'auto',
    },
    halfHeader: {
      color: theme.palette.primary.main,
      textAlign: 'center',
      fontSize: '1.5rem',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 'normal',
      letterSpacing: '-0.055rem',
      textTransform: 'uppercase',
      marginBottom: '2.5rem',
    },
    halfText: {
      color: theme.palette.common.black,
      textAlign: 'center',
      fontSize: '1.4rem',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
      letterSpacing: '-0.055rem',
      marginBottom: '.5rem',
    },
  };
  return styles;
};

export default HalfwayMarkerStyles;
