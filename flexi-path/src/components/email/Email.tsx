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

export default function Email() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Box
      sx={{
        width: { xs: '90%' },
        maxWidth: '32rem',
        height: '25rem',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: '2rem auto 1rem',
      }}
    >
      <Typography
        component="h3"
        sx={{
          color: '#202020',
          fontSize: '1rem',
          fontWeight: 600,
          mb: '2.8rem',
        }}
      >
        Just a moment...
      </Typography>
      <Typography
        component="h4"
        sx={{
          color: '#202020',
          fontSize: '0.875rem',
          fontWeight: 300,
          lineHeight: '121.017%',
          mb: '1.8rem',
        }}
      >
        Before we move on to your profile, would you like an email copy of your
        results?
      </Typography>
      <Typography
        component="p"
        sx={{
          color: '#808080',
          fontSize: '0.75rem',
          fontWeight: 300,
          lineHeight: '121.017%',
        }}
      >
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
                <EmailOutlinedIcon
                  sx={{ color: 'rgba(0, 0, 0, 0.30)', fontWeight: 300 }}
                />
              </InputAdornment>
            ),
          }}
          InputLabelProps={{
            shrink: isFocused,
            style: {
              paddingLeft: isFocused ? 0 : '2rem',
              color: 'rgba(0, 0, 0, 0.30)',
              fontSize: '1rem',
              fontWeight: 300,
            },
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Send me helpful tips and resources"
          sx={{
            mb: '2.3rem',
            '& .MuiFormControlLabel-label': {
              fontWeight: 300,
              color: '#202020',
              fontSize: '.8rem',
            },
          }}
        />
        <Button type="submit" variant="contained" sx={{ width: '100%' }}>
          Send Results
        </Button>
      </Box>
    </Box>
  );
}
