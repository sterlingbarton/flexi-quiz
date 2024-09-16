const NavStyles = () => {
  const styles = {
    navContainer: {
      width: '90%',
      maxWidth: '1500px',
      margin: '0 auto',
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    logoAndLinksContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    buttonGroupContainer: {
      flexGrow: 1,
      display: { xs: 'none', md: 'flex' },
    },
    navLinksLargeContainer: {
      display: { xs: 'none', md: 'flex' },
      width: { md: '28rem', lg: '34rem' },
      ml: '1rem',
      alignItems: 'center',
    },
    singleLinkLargeContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    dropdownLink: {
      color: 'white',
      fontSize: '0.9rem',
      fontWeight: 400,
      textAlign: 'center',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    navLink: {
      color: 'white',
      fontSize: '0.9rem',
      fontWeight: 400,
      textAlign: 'center',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    tooltip: {
      background: '#FFF',
      boxShadow: 3,
      px: '.75rem',
      py: '.5rem',
      textAlign: 'center',
    },
    tooltipLightArrow: {
      color: '#FFF',
    },
    tooltipDarkArrow: {
      color: '#1659CB',
    },
    submenuItemContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    submenuItem: {
      textDecoration: 'none',
      py: '0.25rem',
      fontSize: '1rem',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    menuListProps: {
      px: '1rem',
      py: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    responsiveMenuContainer: {
      flexGrow: 1,
      display: { xs: 'flex', md: 'none' },
    },
    responsiveMenu: {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
      display: { xs: 'flex', md: 'none' },
    },
    menuItemContainer: {
      py: 0,
      px: 0,
      '&:hover': {
        background: 'none',
      },
    },
    menuLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      textDecoration: 'none',
      fontSize: '1rem',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    accordionSummary: {
      color: '#1659CB',
      px: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      fontSize: '1rem',
      '& .MuiAccordionSummary-content': {
        flexGrow: 0,
        margin: 0,
      },
      '& .MuiAccordionSummary-expandIconWrapper': {
        marginLeft: '5px',
      },
    },
  };
  return styles;
};

export default NavStyles;
