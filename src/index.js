import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "materialize-css/dist/css/materialize.css";
import "material-design-icons/iconfont/material-icons.css";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
