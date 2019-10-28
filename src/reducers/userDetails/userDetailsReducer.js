import { createReducer } from "../util/reducerUtil";
import {
  GET_USER_DETAILS,
  CHANGE_USER_IMAGE,
  CHANGE_USER_DETAILS
} from "../../Types";

const initialState = null;

// GET USER DETAILS
const getUserDetails = (state, payload) => {
  return payload.user
};

// CHANGE USER IMAGE
const changeUserImage = (state, payload) => {
  return payload.user
};

// CHANGE USER DETAILS
const changeUserDetails = (state, payload) => {
  return payload.user
};


export default createReducer(initialState, {
  [GET_USER_DETAILS]: getUserDetails,
  [CHANGE_USER_IMAGE]: changeUserImage,
  [CHANGE_USER_DETAILS]: changeUserDetails
});
