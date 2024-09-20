import { Box, Button, Typography, TextField, Link } from '@mui/material';
import VendorPortalBtn from '../buttons/vendor-portal-btn/VendorPortalBtn';
import Nav from '../nav/Nav';
import googleLogo from '../../assets/google-logo.png';
import facebookLogo from '../../assets/facebook-logo.png';
import appleLogo from '../../assets/apple-logo.png';
import SignUpStyles from './SignUpStyles';

export default function LogIn() {
  const styles = SignUpStyles();
  return (
    <Box>
      <Nav />
      <Box sx={styles.pageContainer}>
        <Box sx={styles.vendorBtnContainer}>
          <VendorPortalBtn />
        </Box>
        <Box sx={styles.logInContainer}>
          <Box sx={styles.headingContainer}>
            <Link sx={styles.signUpLink} href="/log-in">
              Have an account? Log in
            </Link>
            <Typography component="h3" sx={styles.heading}>
              Create An Account
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
            Or Sign Up With Email
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
            {/* create account btn */}
            <Button type="submit" variant="contained" sx={{ width: '100%' }}>
              Create Account
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
