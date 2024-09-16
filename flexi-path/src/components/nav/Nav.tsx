import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
  // Button,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
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

function Nav() {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const styles = NavStyles();

  // handle open & close of hamburger menu for small screens
  const handleResponsiveMenuToggle = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(anchorElement ? null : event.currentTarget);
  };

  // handle rendering items for tooltip menus
  const renderSubmenuItems = (
    currentSubmenu: { label: string; href: string }[]
  ) => (
    <Box sx={styles.submenuItemContainer}>
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

  // handle displaying links on large screens
  const renderLargeScreenLinks = () => (
    <Box sx={styles.navLinksLargeContainer}>
      {pages.map((page) =>
        page.submenu ? (
          <Tooltip
            key={page.label}
            title={renderSubmenuItems(page.submenu)}
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
              <Link href={page.href} sx={styles.dropdownLink}>
                {page.label}
                <ArrowDropDownIcon />
              </Link>
            </Box>
          </Tooltip>
        ) : (
          <Box sx={styles.singleLinkLargeContainer} key={page.label}>
            <Link href={page.href} sx={styles.navLink}>
              {page.label}
            </Link>
          </Box>
        )
      )}
    </Box>
  );

  // handle render of menu on small screens
  const renderResponsiveMenu = () => {
    return (
      <Menu
        id="responsive-menu"
        aria-labelledby="responsive-menu-button"
        anchorEl={anchorElement}
        keepMounted
        open={Boolean(anchorElement)}
        onClose={handleResponsiveMenuToggle}
        MenuListProps={{
          sx: styles.menuListProps,
        }}
        sx={styles.responsiveMenu}
      >
        {pages.map((page) => (
          <MenuItem
            disableRipple
            disableGutters
            key={page.label}
            sx={styles.menuItemContainer}
          >
            {/* render accordion or regular link */}
            {page.submenu ? (
              <Accordion disableGutters elevation={0}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#1659CB' }} />}
                  aria-controls={`${page.label}-content`}
                  id={`${page.label}-header`}
                  sx={styles.accordionSummary}
                >
                  {page.label}
                </AccordionSummary>
                {page.submenu.map((submenu) => (
                  <AccordionDetails key={submenu.label}>
                    <Link
                      // only temporary until we get functioning hrefs
                      onClick={handleResponsiveMenuToggle}
                      href={submenu.href}
                    >
                      {submenu.label}
                    </Link>
                  </AccordionDetails>
                ))}
              </Accordion>
            ) : (
              <Link
                sx={styles.menuLink}
                href={page.href}
                // only temporary until we get functioning hrefs
                onClick={handleResponsiveMenuToggle}
              >
                {page.label}
              </Link>
            )}
          </MenuItem>
        ))}
        <MenuItem
          disableRipple
          disableGutters
          sx={styles.menuItemContainer}
          onClick={handleResponsiveMenuToggle}
        >
          <Link href="#" sx={styles.menuLink}>
            Log In
          </Link>
        </MenuItem>
        <MenuItem
          disableRipple
          disableGutters
          sx={styles.menuItemContainer}
          onClick={handleResponsiveMenuToggle}
        >
          <Link href="#" sx={styles.menuLink}>
            Sign Up
          </Link>
        </MenuItem>
      </Menu>
    );
  };

  return (
    <AppBar position="static" elevation={0}>
      <Box sx={styles.navContainer}>
        <Toolbar disableGutters sx={styles.toolbar}>
          {/* logo & large screen section */}
          <Box sx={styles.logoAndLinksContainer}>
            <DarkLogo />
            {renderLargeScreenLinks()}
          </Box>

          {/* small screen responsive menu, large screen buttons section */}
          <Box>
            <Box sx={styles.responsiveMenuContainer}>
              <IconButton
                id="responsive-menu-button"
                size="large"
                aria-label="Toggle login/signup menu"
                aria-controls="responsive-menu"
                aria-haspopup="menu"
                onClick={handleResponsiveMenuToggle}
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
export default Nav;
