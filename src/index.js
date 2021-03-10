import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./StateProvider";
import reducer, { intialState } from "./reducer";

ReactDOM.render(
  <StateProvider initialState={intialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
