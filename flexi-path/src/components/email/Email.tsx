import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  InputAdornment,
} from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import EmailStyles from './EmailStyles';

export default function Email() {
  const styles = EmailStyles();

  const [isFocused, setIsFocused] = useState(false);

  return (
    <Box sx={styles.emailContainer}>
      <Typography component="h3" sx={styles.heading}>
        Just a moment...
      </Typography>
      <Typography component="h4" sx={styles.subheading}>
        Before we move on to your profile, would you like an email copy of your
        results?
      </Typography>
      <Typography component="p" sx={styles.sideNote}>
        We'll save your results so you can easily access them again.
      </Typography>
      <Box component="form">
        <TextField
          id="email-input"
          label="your@email.com"
          variant="outlined"
          type="email"
          size="small"
          margin="normal"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlinedIcon sx={styles.emailIcon} />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            shrink: isFocused,
            style: {
              ...styles.inputLabelProps,
              paddingLeft: isFocused ? 0 : '2rem',
            },
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Send me helpful tips and resources"
          sx={styles.checkbox}
        />
        <Button type="submit" variant="contained" sx={styles.submitButton}>
          Send Results
        </Button>
      </Box>
    </Box>
  );
}
