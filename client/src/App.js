import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrewList, BrewDetails, NavBar } from "./components";
import "./index.css";
const App = () => (
  <React.Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={BrewList} />
      <Route exact path="/brews/:id" component={BrewDetails} />
    </Switch>
  </React.Fragment>
);

export default App;
