const HomeStyles = () => {
  const styles = {
    homeContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      height: '100vh',
      overflowX: 'hidden',
    },
    homeContent: {
      display: 'flex',
      alignItems: 'center',
      flex: 1,
    },
  };
  return styles;
};

export default HomeStyles;
