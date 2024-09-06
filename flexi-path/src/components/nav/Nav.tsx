import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../logo/Logo';
import { DarkNavLogInBtn, LogInBtn } from '../buttons/log-in-btn/LogInBtn';
import { DarkNavSignUpBtn, SignUpBtn } from '../buttons/sign-up-btn/SignUpBtn';
import { Typography } from '@mui/material';

const pages = ['Why Flexi Path', 'Product', 'Services', 'Resources'];

function ResponsiveAppBar() {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavMenuStatus = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(anchorElement ? null : event.currentTarget);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* sm screen menu dropdown */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Button sx={{ textAlign: 'center' }}>{page}</Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
            }}
          >
            <Logo />
          </Box>

          {/* large screen buttons */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Typography
                key={page}
                sx={{
                  width: '8rem',
                  color: 'white',
                  display: 'block',
                  textAlign: 'center',
                  '&:hover': {
                    cursor: 'pointer',
                  },
                }}
              >
                {page}
              </Typography>
            ))}
          </Box>

          {/* Log in menu section */}
          <Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', sm: 'none' },
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
                sx={{
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right',
                  },
                  transformOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                  },
                  display: { xs: 'flex', sm: 'none' },
                }}
              >
                <MenuItem
                  sx={{
                    justifyContent: 'center',
                    '&:hover': {
                      background: 'none',
                    },
                  }}
                  onClick={handleNavMenuStatus}
                >
                  <LogInBtn />
                </MenuItem>
                <MenuItem
                  sx={{
                    justifyContent: 'center',
                    '&:hover': {
                      background: 'none',
                    },
                  }}
                  onClick={handleNavMenuStatus}
                >
                  <SignUpBtn />
                </MenuItem>
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'flex' },
              }}
            >
              <DarkNavLogInBtn />
              <DarkNavSignUpBtn />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
