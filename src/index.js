import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

let http = require("http");
setInterval(function() {
  http.get("https://www.rahrang.xyz");
}, 20000);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
