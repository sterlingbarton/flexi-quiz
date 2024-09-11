import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
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
  Button,
  Tooltip,
} from '@mui/material';

const pages = [
  { label: 'Why Flexi Path', href: '#' },
  {
    label: 'Product',
    href: '#',
    submenu: [
      { label: 'Sub-product 1', href: '#' },
      { label: 'Sub-product 2', href: '#' },
    ],
  },
  {
    label: 'Services',
    href: '#',
    submenu: [
      { label: 'Service 1', href: '#' },
      { label: 'Service 2', href: '#' },
    ],
  },
  { label: 'Resources', href: '#' },
];

function ResponsiveAppBar() {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);

  // handle open & close of hamburger menu for small screens
  const handleNavMenuStatus = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(anchorElement ? null : event.currentTarget);
  };

  const renderSubmenuItems = (
    currentSubmenu: { label: string; href: string }[]
  ) => {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {currentSubmenu.map((submenuItem) => (
          <Link
            href={submenuItem.href}
            key={submenuItem.label}
            sx={{
              textDecoration: 'none',
              py: '0.25rem',
              fontSize: '1rem',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            {submenuItem.label}
          </Link>
        ))}
      </Box>
    );
  };

  const renderNavItem = () => {
    return (
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          width: { md: '28rem', lg: '34rem' },
          ml: '1rem',
        }}
      >
        {pages.map((page) => (
          <Tooltip
            key={page.label}
            title={page.submenu ? renderSubmenuItems(page.submenu) : ''}
            placement="bottom"
            arrow
            leaveDelay={50}
            enterNextDelay={75}
            slotProps={{
              tooltip: {
                sx: {
                  background: '#FFF',
                  boxShadow: 3,
                  px: '.75rem',
                  py: '.5rem',
                  textAlign: 'center',
                },
              },
              arrow: {
                sx: {
                  color: '#FFF',
                },
              },
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            >
              {page.submenu ? (
                <Button
                  variant="text"
                  endIcon={<ArrowDropDownIcon />}
                  disableRipple
                  sx={{
                    color: 'white',
                    width: '100%',
                    fontSize: '0.9rem',
                    fontWeight: 400,
                    textAlign: 'center',
                    '&:hover': {
                      background: '#1659CB',
                    },
                  }}
                >
                  {page.label}
                </Button>
              ) : (
                <Link
                  href={page.href}
                  sx={{
                    width: '100%',
                    fontSize: '0.9rem',
                    color: 'white',
                    display: 'block',
                    textAlign: 'center',
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                >
                  {page.label}
                </Link>
              )}
            </Box>
          </Tooltip>
        ))}
      </Box>
    );
  };

  const renderResponsiveMenu = () => {
    return (
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
          <Tooltip
            title={page.submenu ? renderSubmenuItems(page.submenu) : ''}
            placement="left"
            arrow
            leaveDelay={50}
            enterNextDelay={75}
            slotProps={{
              tooltip: {
                sx: {
                  background: '#FFF',
                  boxShadow: 3,
                  px: '.75rem',
                  py: '.5rem',
                  textAlign: 'center',
                },
              },
              arrow: {
                sx: {
                  color: '#1659CB',
                },
              },
            }}
          >
            <MenuItem
              key={page.label}
              sx={{
                mt: '.25rem',
                '&:hover': {
                  background: 'none',
                  textDecoration: 'underline',
                },
              }}
              onClick={handleNavMenuStatus}
            >
              {page.submenu ? (
                <Link
                  href={page.href}
                  sx={{
                    textDecoration: 'none',
                    display: 'flex',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {page.label}
                  <ArrowDropDownIcon />
                </Link>
              ) : (
                <Link
                  href={page.href}
                  sx={{
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {page.label}
                </Link>
              )}
            </MenuItem>
          </Tooltip>
        ))}
        <MenuItem
          sx={{
            mt: '.25rem',
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
            my: '.25rem',
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
    );
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
          {/* logo & large screen section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <DarkLogo />
            {renderNavItem()}
          </Box>

          {/* small screen responsive menu section */}
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
              {renderResponsiveMenu()}
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
