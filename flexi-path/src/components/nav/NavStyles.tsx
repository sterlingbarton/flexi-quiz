// import { useTheme } from '@mui/material/styles';

const NavStyles = () => {
  // const theme = useTheme();
  const styles = {
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
    navLinksLargeContainer: {
      display: { xs: 'none', md: 'flex' },
      width: { md: '28rem', lg: '34rem' },
      ml: '1rem',
    },
    tooltip: {
      background: '#FFF',
      boxShadow: 3,
      px: '.75rem',
      py: '.5rem',
      textAlign: 'center',
    },
    singleLinkLargeContainer: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    dropdownLink: {
      color: 'white',
      width: '100%',
      fontSize: '0.9rem',
      fontWeight: 400,
      textAlign: 'center',
      '&:hover': {
        background: '#1659CB',
      },
    },
    navLink: {
      width: '100%',
      fontSize: '0.9rem',
      color: 'white',
      display: 'block',
      textAlign: 'center',
      '&:hover': {
        cursor: 'pointer',
      },
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
      '&:hover': {
        background: 'none',
      },
    },
    menuDropdownLink: {
      textDecoration: 'none',
      display: 'flex',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    menuLink: {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
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
    responsiveMenuContainer: {
      flexGrow: 1,
      display: { xs: 'flex', md: 'none' },
    },
    buttonGroupContainer: {
      flexGrow: 1,
      display: { xs: 'none', md: 'flex' },
    },
  };
  return styles;
};

export default NavStyles;
