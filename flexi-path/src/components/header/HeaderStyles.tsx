const HeaderStyles = () => {
  const styles = {
    headerContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '1.75rem 2rem 0',
    },
    mainContent: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      mb: '.75rem',
    },
    smallDisplayContainer: {
      flexGrow: 1,
      display: { xs: 'flex', sm: 'none' },
    },
    menu: {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
      display: { xs: 'flex', sm: 'none' },
    },
    menuItem: {
      justifyContent: 'center',
      '&:hover': {
        background: 'none',
      },
    },
    largeDisplayContainer: {
      flexGrow: 1,
      display: { xs: 'none', sm: 'flex' },
    },
    horizontalRule: {
      background: '#0000004d',
      width: '100vw',
      height: '1px',
    },
  };
  return styles;
};

export default HeaderStyles;
