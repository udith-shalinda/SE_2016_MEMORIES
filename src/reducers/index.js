import { combineReducers } from "redux";

import asyncAction from "./async/asyncReducer";
import auth from "./auth/authReducer";
import user from "./userDetails/userDetailsReducer";

const rootReducer = combineReducers({
  async: asyncAction,
  auth,
  user
});

export default rootReducer;
