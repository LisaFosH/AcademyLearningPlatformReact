import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import LaptopIcon from "@material-ui/icons/Laptop";
import { makeStyles } from "@material-ui/styles";
import "./Navbar.css";

// The Material UI way of adding CSS to JavaScript.
const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));

const Navbar = () => {
    const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>Academy Learning Platform</Typography>
        <LaptopIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
