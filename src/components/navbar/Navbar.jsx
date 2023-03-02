import * as React from "react";
import { useAtom } from "jotai";
import {isEmpty} from 'lodash'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Logo from "assets/images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { styled, useTheme } from "@mui/material";
import { isAuthenticated, leftNavPages, rightNavPages } from "utils/support";
import { isCartDialogOpenAtom, productsInCartAtom } from "utils/atoms";
import CartDialog from "components/cart/CartDialog";

const TypographyStyled = styled(Typography)(() => ({
  margin: "0.2rem 1rem",
  color: grey[800],
  display: "block",
  textTransform: "capitalize",
  fontSize: "1.2rem",
  ':hover': {
    cursor: 'pointer'
  }
}));

function Navbar() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [isCartDialogOpen, setIsCartDialogOpen] = useAtom(isCartDialogOpenAtom);

  const [cartItems] = useAtom(productsInCartAtom);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const onLogoutHandler = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
    window.location.reload();
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {isAuthenticated ? (
        <MenuItem>
          <TypographyStyled onClick={onLogoutHandler} sx={{ my: 0 }}>
            Logout
          </TypographyStyled>
        </MenuItem>
      ) : (
        rightNavPages.map((page) => (
          <MenuItem key={page.name}>
            <NavLink
              to={page.path}
              style={({ isActive }) => ({
                color: isActive ? theme.palette.primary.main : "none",
                textDecoration: isActive ? "underline" : "none",
                fontWeight: 600,
              })}
            >
              <TypographyStyled sx={{ my: 0 }}>{page.name}</TypographyStyled>
            </NavLink>
          </MenuItem>
        ))
      )}
    </Menu>
  );

  return (
    <Box>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#fff", color: grey[800], marginBottom: "2rem" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
              <img src={Logo} alt="Logo" height={50} />
            </Box>

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
                {leftNavPages.map((page) => (
                  <NavLink
                    key={page.name}
                    to={page.path}
                    style={({ isActive }) => ({
                      color: isActive ? theme.palette.primary.main : "none",
                      textDecoration: isActive ? "underline" : "none",
                      fontWeight: 600,
                    })}
                  >
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <TypographyStyled key={page.name}>
                        {page.name}
                      </TypographyStyled>
                    </MenuItem>
                  </NavLink>
                ))}
              </Menu>
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
              <img src={Logo} alt="Logo" height={50} />
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {leftNavPages.map((page) => (
                <NavLink
                  key={page.name}
                  to={page.path}
                  style={({ isActive }) => ({
                    color: isActive ? theme.palette.primary.main : "none",
                    textDecoration: isActive ? "underline" : "none",
                    fontWeight: 600,
                  })}
                >
                  <TypographyStyled
                    key={page.name}
                    onClick={handleCloseNavMenu}
                  >
                    {page.name}
                  </TypographyStyled>
                </NavLink>
              ))}
            </Box>

            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              onClick={() => setIsCartDialogOpen(true)}
            >
              {!isEmpty(cartItems) ? (
                <Badge badgeContent={cartItems?.length} color="error">
                  <ShoppingCartIcon />
                </Badge>
              ) : (
                <Badge badgeContent={0} color="error">
                  <AddShoppingCartIcon />
                </Badge>
              )}
            </IconButton>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {isAuthenticated ? (
                <TypographyStyled onClick={onLogoutHandler} sx={{ my: 0 }}>
                  Logout
                </TypographyStyled>
              ) : (
                rightNavPages.map((page) => (
                  <NavLink
                    key={page.name}
                    to={page.path}
                    style={({ isActive }) => ({
                      color: isActive ? theme.palette.primary.main : "none",
                      textDecoration: isActive ? "underline" : "none",
                      fontWeight: 600,
                    })}
                  >
                    <TypographyStyled key={page.name}>
                      {page.name}
                    </TypographyStyled>
                  </NavLink>
                ))
              )}
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {isCartDialogOpen && <CartDialog />}
    </Box>
  );
}
export default Navbar;
