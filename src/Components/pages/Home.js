import React from "react";
import TextEditor from "../TextEditor";
import CourseTree from "../CourseTree";
import EditIcon from "@material-ui/icons/Edit";
import { Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Home.css";

const useStyles = makeStyles((theme) => ({
  // Button position (not exactly like I want it yet)
  button: {
    margin: theme.spacing(1),
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <>
      <Grid container direction="row" className="grid-container">
        <Grid item xs="12" md="3" className="course-tree-container">
          <CourseTree />
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            className={classes.button}
          >
            Edit
          </Button>
        </Grid>
        <Grid item xs="12" md="5" className="middle-container">
          <TextEditor />
        </Grid>
        <Grid item xs="12" md="4" className="notes-container">
          <Typography variant="h3">My Notes</Typography>
          <ul>
            <li>Notes</li>
            <li>More notes</li>
            <li>All of my notes!</li>
            <li>Yes, even more of them!</li>
            <li>So many notes!</li>
            <li>What?? EVEN MORE NOTES!!</li>
          </ul>
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            className={classes.button}
          >
            Edit
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
