import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

import Handsfree from "handsfree";
import "handsfree/build/lib/assets/handsfree.css";

// Only needed for codesandbox
window.__dirname = "";

/**
 * Setup handsfree.js
 */
window.handsfree = new Handsfree({
  hands: true,
  showDebug: true,
  // This is super important. Remember to eject the models into your public path
  // Windows: xcopy /e node_modules\handsfree\build\lib public
  // Everywhere else: cp -r node_modules/handsfree/build/lib/* public
});

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById("root"));

