import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { storage } from "lib/frameworks/Redux";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

ReactDOM.render(
  <Provider store={storage}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
