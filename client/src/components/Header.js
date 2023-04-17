import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom'
import Auth from '../utils/auth';
const pages = ["Friends", "Profile"];
const settings = ["Account", "Dashboard", "Logout"];


function Header() {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [loggedIn, setLoggedIn] = React.useState(false);
  
  React.useEffect (()=>{
    // debugger
    const get = Auth.getToken();
    if(get) {
       Auth.isTokenExpired(get) && Auth.loggedIn(); {
        setLoggedIn(true);
      };
    };
  }) ;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <FlutterDashIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component={NavLink}
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#FFFFFF" : "#000000",
            })}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Bird Brain
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  component={NavLink}
                  to={`/${page.toLowerCase()}`}
                  onClick={handleCloseNavMenu}
                  style={({ isActive }) => ({
                    color: isActive ? "#FFFFFF" : "#000000",
                  })}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <FlutterDashIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component={NavLink}
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#FFFFFF" : "#000000",
            })}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Bird Brain
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={NavLink}
                to={`/${page.toLowerCase()}`}
                style={({ isActive }) => ({
                  color: isActive ? "#FFFFFF" : "#000000",
                })}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>

            {loggedIn && (
              <>
                <Button 
                sx={{ ml: "15px", right: 12 }} 
                variant="contained"
                onClick={logout}>
                  <Link to='/'>
                    Logout
                  </Link>
                </Button>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar src="/broken-image.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem 
                    key={setting} 
                    onClick={handleCloseUserMenu}
                    component={NavLink}
                    to={`/${setting.toLowerCase()}`}
                    >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}{" "}

            {!loggedIn && (
              <>
                <Button
                  sx={{ ml: "15px" }}
                  variant="contained"
                  color="secondary"
                >
                  <Link to='/Signup'>
                  Register
                  </Link>
                </Button>
                <Button sx={{ ml: "15px" }} variant="contained">
                <Link to='/Login'>
                  Login
                  </Link>
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;