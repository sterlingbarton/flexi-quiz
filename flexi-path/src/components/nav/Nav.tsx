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
import NavStyles from './NavStyles';

const pages = [
  { label: 'Why Flexi Path', href: '#' },
  {
    label: 'Products',
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
  const styles = NavStyles();

  // handle open & close of hamburger menu for small screens
  const handleNavMenuStatus = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(anchorElement ? null : event.currentTarget);
  };

  const renderSubmenuItems = (
    currentSubmenu: { label: string; href: string }[]
  ) => {
    return (
      <Box sx={styles.submenuItemContainer} onClick={handleNavMenuStatus}>
        {currentSubmenu.map((submenuItem) => (
          <Link
            href={submenuItem.href}
            key={submenuItem.label}
            sx={styles.submenuItem}
          >
            {submenuItem.label}
          </Link>
        ))}
      </Box>
    );
  };

  const renderNavLinks = () => {
    return (
      <Box sx={styles.navLinksLargeContainer}>
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
                sx: styles.tooltip,
              },
              arrow: {
                sx: styles.tooltipLightArrow,
              },
            }}
          >
            <Box sx={styles.singleLinkLargeContainer}>
              {page.submenu ? (
                <Button
                  variant="text"
                  endIcon={<ArrowDropDownIcon />}
                  disableRipple
                  sx={styles.dropdownLink}
                >
                  {page.label}
                </Button>
              ) : (
                <Link href={page.href} sx={styles.navLink}>
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
        sx={styles.responsiveMenu}
      >
        {pages.map((page) => (
          <Tooltip
            key={page.label}
            title={page.submenu ? renderSubmenuItems(page.submenu) : ''}
            placement="left"
            arrow
            leaveDelay={50}
            enterNextDelay={75}
            slotProps={{
              tooltip: {
                sx: styles.tooltip,
              },
              arrow: {
                sx: styles.tooltipDarkArrow,
              },
            }}
          >
            <MenuItem
              key={page.label}
              sx={styles.menuItemContainer}
              onClick={handleNavMenuStatus}
            >
              {page.submenu ? (
                <Link href={page.href} sx={styles.menuDropdownLink}>
                  {page.label}
                  <ArrowDropDownIcon />
                </Link>
              ) : (
                <Link href={page.href} sx={styles.menuLink}>
                  {page.label}
                </Link>
              )}
            </MenuItem>
          </Tooltip>
        ))}
        <MenuItem sx={styles.menuItemContainer} onClick={handleNavMenuStatus}>
          <Link href="#" sx={styles.menuLink}>
            Log In
          </Link>
        </MenuItem>
        <MenuItem sx={styles.menuItemContainer} onClick={handleNavMenuStatus}>
          <Link href="#" sx={styles.menuLink}>
            Sign Up
          </Link>
        </MenuItem>
      </Menu>
    );
  };

  return (
    <AppBar position="static">
      <Box sx={styles.navContainer}>
        <Toolbar disableGutters sx={styles.toolbar}>
          {/* logo & large screen section */}
          <Box sx={styles.logoAndLinksContainer}>
            <DarkLogo />
            {renderNavLinks()}
          </Box>

          {/* small screen responsive menu, large screen buttons section */}
          <Box>
            <Box sx={styles.responsiveMenuContainer}>
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
            <Box sx={styles.buttonGroupContainer}>
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
