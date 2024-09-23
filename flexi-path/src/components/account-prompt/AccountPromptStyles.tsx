const AccountPromptStyles = () => {
  const styles = {
    promptContainer: {
      width: '90%',
      maxWidth: '25rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '2rem auto',
    },
    heading: {
      color: '#202020',
      fontSize: '1rem',
      fontWeight: 600,
      mb: '2rem',
    },
    img: { width: '10rem', height: '7rem', flexShrink: 0, mb: '2.2rem' },
    paragraph: {
      color: '#202020',
      fontSize: '0.875rem',
      fontWeight: 300,
      lineHeight: '121.017%',
      mb: '1.8rem',
    },
    setUpBtn: {
      width: '100%',
    },
  };
  return styles;
};

export default AccountPromptStyles;
