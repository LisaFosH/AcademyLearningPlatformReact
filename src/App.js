import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/pages/Home";
import FetchApi from "./Components/pages/FetchApi";
import ProfileSettings from "./Components/pages/ProfileSettings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

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
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />{" "}
          <Route path="/profile-settings" exact component={ProfileSettings} />{" "}
          <Route path="/fetch-api" exact component={FetchApi} />{" "}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
