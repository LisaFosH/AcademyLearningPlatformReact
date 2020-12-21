import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  MenuItem,
} from "@material-ui/core";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { PlayCircleFilledWhite } from "@material-ui/icons";

// The Material UI way of adding CSS to JavaScript.
const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <MenuItem>
          <Avatar
            alt="ProfilePicture"
            src="https://images.unsplash.com/photo-1563372512-5cea14180426?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
          />
        </MenuItem>
        <MenuItem>
          Ingvild Unstad <ExpandMore />
        </MenuItem>
        <div className={classes.typographyStyles}></div>
        <MenuItem>
          <Link to="/" className="logo">
            {" "}
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
