import { combineReducers } from "redux";

import asyncAction from "./async/asyncReducer";
import auth from "./auth/authReducer";
import user from "./userDetails/userDetailsReducer";
import posts from "./posts/postsReducer";

const rootReducer = combineReducers({
  async: asyncAction,
  auth,
  user,
  posts
});

export default rootReducer;
