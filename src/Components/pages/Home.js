import React from "react";
import TextEditor from "../TextEditor";
import CourseTree from "../CourseTree";
import { Grid, Typography } from "@material-ui/core";
import "./Home.css";

function Home() {
  return (
    <>
      <Grid container direction="row" className="grid-container">
        <Grid item xs="12" md="3" className="course-tree-container">
          <CourseTree />
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
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
