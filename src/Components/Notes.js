import React, { useState } from "react";
import { Typography, Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import TextEditor from "./TextEditor";
import { makeStyles } from "@material-ui/core/styles";
import Username from "./Username";

const useStyles = makeStyles((theme) => ({
  // Button position (not exactly like I want it yet)
  button: {
    margin: theme.spacing(1),
  },
}));

function Notes() {
  const classes = useStyles();

  // Switches between the notes editor and current notes
  const [isNotesActive, setNotesActive] = useState("false");
  const handleNotesToggle = () => {
    setNotesActive(!isNotesActive);
  };

  return (
    <>
      <Typography variant="h5">
        Here are your notes, <Username />
      </Typography>
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
          <li>
            My username, in case I forget: <Username />
          </li>
        </ul>
      </div>
      <Button
        variant="outlined"
        startIcon={<EditIcon />}
        // className={classes.button}
        onClick={handleNotesToggle}
      >
        Edit
      </Button>
    </>
  );
}

export default Notes;
