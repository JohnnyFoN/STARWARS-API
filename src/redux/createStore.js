import { combineReducers, createStore } from "redux";

import postsReducer from "./posts";

export const createReduxStore = () => {
  return createStore(
    combineReducers({
      postsReducer
    })
  );
};
