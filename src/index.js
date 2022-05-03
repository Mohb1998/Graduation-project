import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import Handsfree from "handsfree";
import "handsfree/build/lib/assets/handsfree.css";

window.__dirname = "";


window.handsfree = new Handsfree({
  hands: true,
  showDebug: true,
});

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById("root"));

