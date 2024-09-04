const SpinningProgressLoaderStyles = () => {
  const styles = {
    container: {
      position: 'relative',
      display: 'inline-flex',
    },
    progressLoader: {
      color: '#b1d4fd',
    },
    contentsContainer: {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    value: {
      position: 'absolute',
      textAlign: 'center',
      fontSize: '3rem',
      color: '#b1d4fd',
    },
  };
  return styles;
};

export default SpinningProgressLoaderStyles;
