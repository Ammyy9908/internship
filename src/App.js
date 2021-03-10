import "./App.css";
import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import Home from "./screens/Home";
import Auth from "./screens/Auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
