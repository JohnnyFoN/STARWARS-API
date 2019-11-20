import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import { createReduxStore } from "./redux/createStore";

//const store = createStore(allReducers);
ReactDOM.render(
  <App store={createReduxStore()} />,
  document.getElementById("root")
);

serviceWorker.unregister();
