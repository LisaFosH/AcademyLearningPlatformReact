import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  MenuItem,
  Menu,
} from "@material-ui/core";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/styles";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { PlayCircleFilledWhite } from "@material-ui/icons";
import Button from "@material-ui/core/Button";

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
            Ingvild Unstad <ExpandMore />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/profile">
                Profile
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/settings">
                Settings
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/">
                Logout
              </Link>
            </MenuItem>
          </Menu>
        </MenuItem>
        <div className={classes.typographyStyles}></div>
        <MenuItem>
          <Link to="/" className="logo">
            <Typography variant="h5">Academy Learning Platform</Typography>
          </Link>
        </MenuItem>
        <div className={classes.typographyStyles}></div>
        <MenuItem>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/courses" className="nav-link">
            Courses
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/fetch-api" className="nav-link">
            Fetch API
          </Link>
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
