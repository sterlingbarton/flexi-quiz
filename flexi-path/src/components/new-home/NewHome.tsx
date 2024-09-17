import Nav from '../nav/Nav';
import { Box, Button, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import hero from '../../assets/hero.png';

export default function NewHome() {
  return (
    <Box sx={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <Nav />
      {/* page content container */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: { xs: '93.7%' },
          width: { xs: '100%', md: '95%', lg: '90%' },
          margin: '0 auto',
          // border: '1px solid green',
        }}
      >
        {/* vendor portal button container */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="text"
            endIcon={<ArrowForwardIcon />}
            sx={{ fontSize: '0.7rem' }}
          >
            Vendor Portal
          </Button>
        </Box>
        {/* columns/rows container */}
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            height: '100%',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
          }}
        >
          {/* column 1 */}
          <Box
            sx={{
              width: { xs: '95%', md: '50%' },
              // border: '1px solid black',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              justifyContent: { xs: 'none', md: 'center' },
            }}
          >
            {/* column content */}
            <Box
              sx={{
                height: { xs: '90%', md: '70%' },
                // border: '1px solid black',
                width: { xs: '95%', sm: '90%', md: '80%' },
                display: 'flex',
                flexDirection: 'column',
                // justifyContent: { xs: 'none', md: 'flex-start' },
                mt: { xs: '4rem', sm: '5rem', md: '1rem' },
              }}
            >
              <Typography
                component={'h1'}
                sx={{
                  color: '#626262',
                  fontSize: '2.25rem',
                  fontWeight: '800',
                  lineHeight: '144%',
                  letterSpacing: '-0.09rem',
                  mb: '1.2rem',
                }}
              >
                Explore resources to guide your child onto the right path.
              </Typography>
              <Typography
                component={'h3'}
                sx={{
                  color: '#626262',
                  fontSize: '1.25rem',
                  fontWeight: '300',
                  letterSpacing: '-0.05rem',
                  mb: '1.5rem',
                }}
              >
                Take our pathway quiz to discover the best schooling option for
                your child.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  fontSize: '1.15rem',
                  padding: '1rem .9rem',
                  height: '3.2rem',
                  width: '13rem',
                }}
              >
                Get started for free
              </Button>
            </Box>
          </Box>
          {/* column 2 */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              flexDirection: 'column',
              width: { xs: '95%', md: '50%' },
              // border: '1px solid black',
              justifyContent: { xs: 'none', md: 'flex-start' },
            }}
          >
            {/* column content */}
            <Box
              sx={{
                height: { xs: '90%', md: '70%' },
                // border: '1px solid black',
                position: 'relative',
                width: { xs: '100%', sm: '85%', md: '100%' },
                mt: { xs: 0, md: '4rem' },
              }}
            >
              <Box
                sx={{
                  background: '#FFEF9A',
                  position: 'relative',
                  top: '5%',
                  left: '11%',
                  zIndex: 1,
                  width: { xs: '85%', md: '90%' },
                  height: { xs: '80%', sm: '90%', md: '65%', lg: '70%' },
                }}
              >
                {' '}
              </Box>
              <Box
                component={'img'}
                src={hero}
                sx={{
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
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
