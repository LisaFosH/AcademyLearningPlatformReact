import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/pages/Home";
import FetchApi from "./Components/pages/FetchApi";
import Profile from "./Components/pages/Profile";
import Settings from "./Components/pages/Settings";
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
          <Route path="/" exact component={Home} />
          <Route path="/settings" exact component={Settings} />
          <Route path="/fetch-api" exact component={FetchApi} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
