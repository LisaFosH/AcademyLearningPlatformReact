import React, { useState } from "react";
import TextEditor from "../TextEditor";
import CourseTree from "../CourseTree";
import Notes from "../Notes";
import EditIcon from "@material-ui/icons/Edit";
import { Grid, Button } from "@material-ui/core";
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

  // Switches between the course editor and current course
  const [isCoursesActive, setCoursesActive] = useState("false"); 
  const [content, setPageContent] = useState("heitest");
  const handleCoursesToggle = () => {
    setCoursesActive(!isCoursesActive);
  };
  const handlePageClick = (content) => {
    console.log("ho")
    setPageContent(content);
  }


  return (
    <>
      <Grid container direction="row" className="grid-container">
        <Grid item xs="12" md="3" className="course-tree-container">
          <CourseTree setText={handlePageClick}/>
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
            <TextEditor text={content} />
          </div>
        </Grid>
        <Grid item xs="12" md="4" className="notes-container">
          <Notes />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
