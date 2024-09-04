const FooterStyles = () => {
  const styles = {
    footer: {
      position: 'relative',
      bottom: 0,
      margin: '0 2rem 2rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    progressBar: {
      width: '100%',
      marginBottom: '1rem',
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    backButton: {
      flex: '0 0 auto',
      alignSelf: 'flex-start',
    },
    nextButton: {
      flex: '0 0 auto',
      alignSelf: 'flex-end',
    },
    getStartedButton: {
      marginLeft: 'auto',
    },
  };
  return styles;
};

export default FooterStyles;
