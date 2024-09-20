import { Box, Button, Typography, TextField, Link } from '@mui/material';
import VendorPortalBtn from '../buttons/vendor-portal-btn/VendorPortalBtn';
import Nav from '../nav/Nav';
// import { LogInBtn } from '../buttons/log-in-btn/LogInBtn';
import googleLogo from '../../assets/google-logo.png';
import facebookLogo from '../../assets/facebook-logo.png';
import appleLogo from '../../assets/apple-logo.png';
import LogInStyles from './LogInStyles';

export default function LogIn() {
  const styles = LogInStyles();
  return (
    <Box>
      <Nav />
      <Box sx={styles.pageContainer}>
        <Box sx={styles.vendorBtnContainer}>
          <VendorPortalBtn />
        </Box>
        <Box sx={styles.logInContainer}>
          <Box sx={styles.headingContainer}>
            <Link sx={styles.signUpLink}>
              Don't have an account yet? Sign Up
            </Link>
            <Typography component="h3" sx={styles.heading}>
              Please Log In
            </Typography>
          </Box>
          <Box sx={styles.buttonGroupContainer}>
            <Button variant="outlined" sx={styles.googleAuthBtn}>
              <Box component="img" src={googleLogo} sx={styles.icon} />
              Continue with Google
            </Button>
            <Button variant="contained" sx={styles.facebookAuthBtn}>
              <Box component="img" src={facebookLogo} sx={styles.icon} />
              Continue with Facebook
            </Button>
            <Button variant="contained" sx={styles.appleAuthBtn}>
              <Box component="img" src={appleLogo} sx={styles.icon} />
              Continue with Apple
            </Button>
          </Box>
          <Typography component="p" sx={styles.logInPTag}>
            Or Log In With Email
          </Typography>
          <Box component="form" sx={styles.logInForm}>
            <TextField
              id="email-input"
              label="Enter Email Address"
              type="email"
              size="small"
              margin="normal"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="password-input"
              label="Password"
              type="password"
              size="small"
              fullWidth
              helperText="Minimum 8 characters, ideally more."
              InputLabelProps={{
                shrink: true,
              }}
            />
            {/* log in btn */}
            <Button type="submit" variant="contained" sx={{ width: '100%' }}>
              Log In
            </Button>
            {/* <LogInBtn /> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
