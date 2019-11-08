import postReducer from "./reducer_Posts";
import userReducer from "./reducer_Users";
import commentReducer from "./reducer_Comments";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  postReducer,
  userReducer,
  commentReducer
});

export default allReducers;
