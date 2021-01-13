import React from "react";
import { AppBar, Toolbar, Avatar, MenuItem, Menu } from "@material-ui/core";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/styles";
import { Link, Redirect } from "react-router-dom";
import "./Navbar.css";
import Button from "@material-ui/core/Button";
import Username from "./Username";

// The Material UI way of adding CSS to JavaScript.
const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  // Allows us to open and close the dropdown menu
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <MenuItem>
          <Avatar
            alt="ProfilePicture"
            src="https://images.unsplash.com/photo-1563372512-5cea14180426?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
          />
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <Username />
            <ExpandMore />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/profile">Profile</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a href="https://academyprosjekt.azurewebsites.net/Identity/Account/Manage">
                Settings
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a href="https://academyprosjekt.azurewebsites.net/identity/Account/Logout">
                Logout
              </a>
            </MenuItem>
          </Menu>
        </MenuItem>
        <div className={classes.typographyStyles}></div>
        <Link to="/" className="logo">
          <MenuItem>
            <img
              src="../../images/AW_logo_Academy_main_green_rgb.svg"
              alt=""
              width="200px"
            />
          </MenuItem>
        </Link>
        <div className={classes.typographyStyles}></div>
        <Link to="/" className="nav-link">
          <MenuItem>Home</MenuItem>
        </Link>
        <Link to="/courses" className="nav-link">
          <MenuItem>Courses</MenuItem>
        </Link>
        <Link to="/fetch-api" className="nav-link">
          <MenuItem>Fetch API</MenuItem>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
