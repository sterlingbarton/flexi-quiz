import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { DarkLogo } from '../logo/Logo';
import { DarkNavLogInBtn } from '../buttons/log-in-btn/LogInBtn';
import { DarkNavSignUpBtn } from '../buttons/sign-up-btn/SignUpBtn';
import {
  Link,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';

const pages = ['Why Flexi Path', 'Product', 'Services', 'Resources'];

function ResponsiveAppBar() {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);

  const handleNavMenuStatus = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(anchorElement ? null : event.currentTarget);
  };

  return (
    <AppBar position="static">
      <Box
        sx={{
          width: '90%',
          maxWidth: '1500px',
          margin: '0 auto',
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {/* logo & large screen links */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <DarkLogo />
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                width: '28rem',
                ml: '1rem',
              }}
            >
              {pages.map((page) => (
                <Link
                  href="#"
                  key={page}
                  sx={{
                    width: '25%',
                    fontSize: '0.9rem',
                    color: 'white',
                    display: 'block',
                    textAlign: 'center',
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                >
                  {page}
                </Link>
              ))}
            </Box>
          </Box>

          {/* dropdown menu section */}
          <Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'none' },
              }}
            >
              <IconButton
                size="large"
                aria-label="Log in sign up menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleNavMenuStatus}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElement}
                keepMounted
                open={Boolean(anchorElement)}
                onClose={handleNavMenuStatus}
                MenuListProps={{ sx: { py: 0, px: '.5rem' } }}
                sx={{
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right',
                  },
                  transformOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                  },
                  display: { xs: 'flex', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    sx={{
                      mb: '.25rem',
                      '&:hover': {
                        background: 'none',
                        textDecoration: 'underline',
                      },
                    }}
                    onClick={handleNavMenuStatus}
                  >
                    <Link
                      href="#"
                      sx={{
                        textDecoration: 'none',
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {page}
                    </Link>
                  </MenuItem>
                ))}
                <MenuItem
                  sx={{
                    mb: '.25rem',
                    '&:hover': { background: 'none' },
                  }}
                  onClick={handleNavMenuStatus}
                >
                  <Link
                    href="#"
                    sx={{
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    Log In
                  </Link>
                </MenuItem>
                <MenuItem
                  sx={{
                    mb: '.25rem',
                    '&:hover': { background: 'none' },
                  }}
                  onClick={handleNavMenuStatus}
                >
                  <Link
                    href="#"
                    sx={{
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    Sign Up
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <DarkNavLogInBtn />
              <DarkNavSignUpBtn />
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}
export default ResponsiveAppBar;
