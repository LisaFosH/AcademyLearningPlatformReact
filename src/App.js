import React from "react";
import TextEditor from "./Components/TextEditor";
import Navbar from "./Components/Navbar";
import "./App.css";
import { Grid } from "@material-ui/core";

function App() {
  //Connects to the other ALP app when running both on localhost.
  fetch("https://localhost:5001/")
    .then((response) => {
      console.log(response.status);
      return response.text();
    })
    .then((text) => console.log(text));

  return (
    <div className="App">
      <Grid container direction="column">
          <Navbar />
        <Grid container direction="row" className="con">
          <Grid item container>
            <Grid item xs="2" className="con1">
              Container 1
            </Grid>
            <Grid item xs="8" className="con2">
              <TextEditor />
            </Grid>
            <Grid item xs="2" className="con3">
              Container 3
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
