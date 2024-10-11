import { Box, Typography, TextField, Button, Container } from '@mui/material';
import Nav from '../../components/nav/Nav';
import TrueFriends from '../../assets/undraw_true_friends.png';

export default function CreateAccount() {
  return (
    <Box sx={{ height: '100vh', overflow: 'hidden' }}>
      <Nav />
      <Container
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: 'center',
          justifyContent: { lg: 'space-evenly' },
          mt: { xs: '5vh', lg: '20vh' },
        }}
      >
        <Box>
          <Box
            component={'img'}
            src={TrueFriends}
            sx={{ width: '27rem', height: '18rem' }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: { xs: 'flex-start', lg: 'center' },
            gap: 3,
          }}
        >
          <Box sx={{ width: '21.8125rem' }}>
            <Typography
              component="h1"
              sx={{
                color: '#202020',
                fontSize: '1.5rem',
                fontWeight: 600,
              }}
            >
              Add Contact Information
            </Typography>
            <Typography
              component="h1"
              sx={{
                color: '#202020',
                fontSize: '0.875rem',
                fontWeight: 300,
                lineHeight: '121%',
              }}
            >
              Please take a moment to add your contact information for better
              communication and assistance.
            </Typography>
            <Box
              component="form"
              sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
            >
              <TextField
                id="first-name-input"
                label="First Name"
                placeholder="Jane"
                variant="outlined"
                type="text"
                size="small"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="last-name-input"
                label="Last Name"
                placeholder="Doe"
                variant="outlined"
                type="text"
                size="small"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="email-input"
                label="Email Address"
                placeholder="Janedoe@gmail.com"
                variant="outlined"
                type="email"
                size="small"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="phone-number-input"
                label="Phone Number"
                variant="outlined"
                type="tel"
                size="small"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  inputMode: 'numeric', // ensures numeric keypad on mobile devices
                }}
              />
              <Button
                // type="submit"
                variant="contained"
                sx={{ width: '100%' }}
              >
                Add Contact Information
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      {/* <Container> */}
      {/* <Box>{components[currentPage]}</Box> */}
      {/* <ResultsNavigation
        handleBack={handleBack}
        handleNext={handleNext}
        renderDots={renderDots}
        currentPage={currentPage}
        totalPages={totalPages}
      /> */}
      {/* </Container> */}
    </Box>
  );
}
