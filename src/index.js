import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";

import allReducers from "./reducers/reducerIndex";
import { createStore } from "redux";

const store = createStore(allReducers);
debugger;
ReactDOM.render(<App store={store} />, document.getElementById("root"));

serviceWorker.unregister();
