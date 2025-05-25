import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { ROOT, ABOUT_US, CONTACT_US } from '../../routes/routes.json';
import logo from '../../assets/Effluo-logo.png';
import { useState } from 'react';

const pages = [
  'Home',
  'Domain',
  'Milestones',
  'Documents',
  'Slides',
  'About Us',
  'Contact Us',
];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ width: '100%', backgroundColor: '#064472' }}
    >
      <Container>
        <Toolbar disableGutters>
          <img src={logo} alt="logo" width={50} />
          <Typography
            variant="h3"
            noWrap
            component="a"
            href={`${ROOT.route}`}
            sx={{
              mr: 2,
              ml: 1,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 900,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            EFFLUO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                <MenuItem
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu;
                    if (page === 'Home') {
                      navigate(ROOT.route);
                    } else if (page === 'About Us') {
                      navigate(`${ABOUT_US.route}`);
                    } else if (page === 'Contact Us') {
                      navigate(`${CONTACT_US.route}`);
                    } else {
                      const route = `${ROOT.route}${page.toLowerCase()}`;
                      navigate(route);
                    }
                  }}
                >
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href={`${ROOT.route}`}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            EFFLUO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  handleCloseNavMenu;
                  if (page === 'Home') {
                    navigate(ROOT.route);
                  } else if (page === 'About Us') {
                    navigate(`${ABOUT_US.route}`);
                  } else if (page === 'Contact Us') {
                    navigate(`${CONTACT_US.route}`);
                  } else {
                    const route = `${ROOT.route}${page.toLowerCase()}`;
                    navigate(route);
                  }
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
