const SpinningProgressLoaderStyles = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    progressLoader: {
      color: '#b1d4fd',
    },
    contentsContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
    },
    icon: {
      fontSize: '2.5rem',
      color: '#b1d4fd',
    },
    value: {
      fontSize: '2rem',
      color: '#b1d4fd',
    },
  };
  return styles;
};

export default SpinningProgressLoaderStyles;
