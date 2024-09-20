const HomeStyles = () => {
  const styles = {
    homePageContainer: { width: '100%', height: '100vh', overflow: 'hidden' },
    bodyContainer: {
      display: 'flex',
      flexDirection: 'column',
      height: { xs: '93.7%' },
      width: { xs: '100%', md: '95%', lg: '90%' },
      margin: '0 auto',
    },
    vendorBtnContainer: { display: 'flex', justifyContent: 'flex-end' },
    pageContent: {
      display: 'flex',
      width: '100%',
      height: '100%',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
    },
    ctaColumn: {
      width: { xs: '95%', md: '50%' },
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: { xs: 'center', md: 'flex-start' },
      justifyContent: { xs: 'none', md: 'center' },
    },
    ctaContent: {
      height: { xs: '90%', md: '70%' },
      width: { xs: '95%', sm: '90%', md: '80%' },
      display: 'flex',
      flexDirection: 'column',
      mt: { xs: '4rem', sm: '5rem', md: '1rem' },
    },
    heading: {
      color: '#626262',
      fontSize: '2.25rem',
      fontWeight: '800',
      lineHeight: '144%',
      letterSpacing: '-0.09rem',
      mb: '1.2rem',
    },
    subheading: {
      color: '#626262',
      fontSize: '1.25rem',
      fontWeight: '300',
      letterSpacing: '-0.05rem',
      mb: '1.5rem',
    },
    ctaBtn: {
      fontSize: '1.15rem',
      padding: '1rem .9rem',
      height: '3.2rem',
      width: '13rem',
    },
    imgColumn: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      flexDirection: 'column',
      width: { xs: '95%', md: '50%' },
      justifyContent: { xs: 'none', md: 'flex-start' },
    },
    imgColumnContent: {
      height: { xs: '90%', md: '70%' },
      position: 'relative',
      width: { xs: '100%', sm: '85%', md: '100%' },
      mt: { xs: 0, md: '4rem' },
    },
    imgBackdrop: {
      background: '#FFEF9A',
      position: 'relative',
      top: '5%',
      left: '11%',
      zIndex: 1,
      width: { xs: '85%', md: '90%' },
      height: { xs: '80%', sm: '90%', md: '65%', lg: '70%' },
    },
    img: {
      width: { xs: '83%', md: '90%' },
      height: {
        xs: '16rem',
        sm: '18rem',
        md: '20rem',
        lg: '22rem',
      },
      position: 'relative',
      top: { xs: '-70%', sm: '-80%', md: '-56%', lg: '-61%' },
      left: { xs: '3%' },
      zIndex: 10,
    },
  };
  return styles;
};

export default HomeStyles;
