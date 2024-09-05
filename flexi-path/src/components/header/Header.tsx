import { useState, useContext } from 'react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { QuizStateContext } from '../../context/QuizStateContext';
import Logo from '../logo/Logo';
import SaveAndExitBtn from '../buttons/save-and-exit-btn/SaveAndExitBtn';
import HeaderStyles from './HeaderStyles';
import LogInBtn from '../buttons/log-in-btn/LogInBtn';
import SignUpBtn from '../buttons/sign-up-btn/SignUpBtn';

export default function Header() {
  const styles = HeaderStyles();
  const { quizState } = useContext(QuizStateContext);

  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);

  const handleNavMenuStatus = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(anchorElement ? null : event.currentTarget);
  };
  return (
    <Box sx={styles.headerContainer}>
      <Box sx={styles.mainContent}>
        <Logo />
        {quizState.quizStart ? (
          <SaveAndExitBtn />
        ) : (
          <Box>
            <Box sx={styles.smallDisplayContainer}>
              <IconButton
                size="large"
                aria-label="Log in sign up menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleNavMenuStatus}
                color="primary"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElement}
                keepMounted
                open={Boolean(anchorElement)}
                onClose={handleNavMenuStatus}
                sx={styles.menu}
              >
                <MenuItem sx={styles.menuItem} onClick={handleNavMenuStatus}>
                  <LogInBtn />
                </MenuItem>
                <MenuItem sx={styles.menuItem} onClick={handleNavMenuStatus}>
                  <SignUpBtn />
                </MenuItem>
              </Menu>
            </Box>
            <Box sx={styles.largeDisplayContainer}>
              <LogInBtn />
              <SignUpBtn />
            </Box>
          </Box>
        )}
      </Box>
      {!quizState.quizStart && <Box sx={styles.horizontalRule}></Box>}
    </Box>
  );
}
