const ResultsDisplayStyles = () => {
  const styles = {
    resultsDisplayContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      margin: '2rem auto 1rem',
    },
    headingContainer: {
      textAlign: 'center',
    },
    header: {
      color: '#202020',
      fontSize: 16,
      fontWeight: '600',
      wordWrap: 'break-word',
    },
    subHeader: {
      color: '#202020',
      fontSize: 16,
      fontWeight: '300',
      wordWrap: 'break-word',
    },
    result: {
      color: '#202020',
      fontSize: 22,
      fontWeight: '600',
      wordWrap: 'break-word',
    },
    resultImg: {
      width: '11.5rem',
      height: '11.5rem',
      flexShrink: 0,
      marginY: '2.5rem',
    },
    resultDetails: {
      textAlign: 'center',
      color: '#202020',
      fontSize: 16,
      fontWeight: '300',
      wordWrap: 'break-word',
      height: '4rem',
      maxWidth: '42rem',
    },
  };
  return styles;
};

export default ResultsDisplayStyles;
