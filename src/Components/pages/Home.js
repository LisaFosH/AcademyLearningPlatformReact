import React, { useState } from "react";
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

  // Switches between the notes editor and current notes
  const [isNotesActive, setNotesActive] = useState("false");
  const handleNotesToggle = () => {
    setNotesActive(!isNotesActive);
  };

  // Switches between the course editor and current course
  const [isCoursesActive, setCoursesActive] = useState("false");
  const handleCoursesToggle = () => {
    setCoursesActive(!isCoursesActive);
  };

  return (
    <>
      <Grid container direction="row" className="grid-container">
        <Grid item xs="12" md="3" className="course-tree-container">
          <CourseTree />
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            className={classes.button}
            onClick={handleCoursesToggle}
          >
            Edit
          </Button>
        </Grid>
        <Grid item xs="12" md="5" className="middle-container">
          <div className={isCoursesActive ? "shown" : "hidden"}>
            <TextEditor />
          </div>
        </Grid>
        <Grid item xs="12" md="4" className="notes-container">
          <Typography variant="h3">My Notes</Typography>
          <div className={isNotesActive ? "shown" : "hidden"}>
            <TextEditor />
          </div>
          <div className={isNotesActive ? "hidden" : "shown"}>
            <ul>
              <li>Notes</li>
              <li>More notes</li>
              <li>All of my notes!</li>
              <li>Yes, even more of them!</li>
              <li>So many notes!</li>
              <li>What?? EVEN MORE NOTES!!</li>
            </ul>
          </div>
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            className={classes.button}
            onClick={handleNotesToggle}
          >
            Edit
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
