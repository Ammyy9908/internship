import "./App.css";
import React from "react";
import Home from "./screens/Home";
import Auth from "./screens/Auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
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
