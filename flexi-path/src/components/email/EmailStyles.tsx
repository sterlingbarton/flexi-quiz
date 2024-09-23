const EmailStyles = () => {
  const styles = {
    emailContainer: {
      width: '90%',
      maxWidth: '32rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '2rem auto',
    },
    heading: {
      color: '#202020',
      fontSize: '1rem',
      fontWeight: 600,
      mb: '2.8rem',
    },
    subheading: {
      color: '#202020',
      fontSize: '0.875rem',
      fontWeight: 300,
      lineHeight: '121.017%',
      mb: '1.8rem',
    },
    sideNote: {
      color: '#808080',
      fontSize: '0.75rem',
      fontWeight: 300,
      lineHeight: '121.017%',
    },
    emailIcon: { color: 'rgba(0, 0, 0, 0.30)', fontWeight: 300 },
    inputLabelProps: {
      color: 'rgba(0, 0, 0, 0.30)',
      fontSize: '1rem',
      fontWeight: 300,
    },
    checkbox: {
      mb: '2.3rem',
      '& .MuiFormControlLabel-label': {
        fontWeight: 300,
        color: '#202020',
        fontSize: '.8rem',
      },
    },
    submitButton: {
      width: '100%',
    },
  };
  return styles;
};

export default EmailStyles;
