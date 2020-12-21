import React from "react";
import TextEditor from "../TextEditor";
import CourseTree from "../CourseTree";
import { Grid } from "@material-ui/core";

function Home() {
  return (
    <>
      <Grid container direction="row" className="con">
        <Grid item xs="12" md="4" className="con1">
          <CourseTree />
        </Grid>
        <Grid item xs="12" md="4" className="con2">
          <TextEditor />
        </Grid>
        <Grid item xs="12" md="4" className="con3">
          <h2>My Notes</h2>
          <ul>
            <li>Notes</li>
            <li>More notes</li>
            <li>All of my notes!</li>
            <li>Yes, even more of them!</li>
            <li>So many notes!</li>
          </ul>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
