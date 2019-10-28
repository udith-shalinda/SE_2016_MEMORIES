import {
  CHECK_USER_AUTH_STATE,
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER
} from "../../Types";
import md5 from "md5";
import { auth, database } from "../../config/firebase";
// import { getUserDetails } from "../userDetails/userDetailsActions";
import { asyncActionStart, asyncActionFinished } from "../async/asyncAction";

// firebase database usersRef
const usersRef = database().ref('users')

// CHECK USER AUTH STATE
export const checkUserAuthState = () => async dispatch => {
  dispatch(asyncActionStart("Check_User"));
  try {
    await auth().onAuthStateChanged(async user => {
      if (user) {

        // const checkUser = await axios.post(`/api/getUserDetails`, body, config);
        // dispatch(getUserDetails(checkUser.data.user));
        
        dispatch({
          type: CHECK_USER_AUTH_STATE,
          payload: { auth: true }
        });
      } else {
        dispatch({
          type: CHECK_USER_AUTH_STATE,
          payload: { auth: false }
        });
      }
    });
  } catch (err) {
    alert(err.message);
  }
  dispatch(asyncActionFinished());
};

// REGISTER USER
export const registerUser = (
  email,
  password,
  username,
  setError,
  setUsedEmail
) => async dispatch => {
  dispatch(asyncActionStart("Register_Loading"));
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    const image = `https://gravatar.com/avatar/${md5(email)}?d=identicon`;
    // const body = {
    //   username,
    //   email,
    //   image
    // };
    console.log(user.user.uid)
    try {
    //   const newUser = await axios.post(`/api/register`, body, config);
    //   dispatch(getUserDetails(newUser.data.user));
    // SAVE USER IN FIREBASE DATABASE
    usersRef.child(user.user.uid).set({
        username,
        email,
        image,
        uid: user.user.uid
    })
      dispatch({
        type: REGISTER_USER
      });
    } catch (err) {
      console.error(err.message);
    }
  } catch (err) {
    console.log(err);
    if (
      err.message === "The email address is already in use by another account."
    ) {
      setUsedEmail(true);
    }
    setError(err.message);
  }
  dispatch(asyncActionFinished());
};

// LOGIN USER
export const loginUser = (
  email,
  password,
  setError,
  setInvalidEmail,
  setInvalidPassword
) => async dispatch => {
  dispatch(asyncActionStart("Login_Loading"));
  const body = {
    email
  };
  try {
    await auth().signInWithEmailAndPassword(email, password);
    try {
    //   const user = await axios.post(`/api/getUserDetails`, body, config);
    //   dispatch(getUserDetails(user.data.user));
      dispatch({
        type: LOGIN_USER
      });
    } catch (err) {
      console.error(err.message);
    }
  } catch (err) {
    console.error(err.message);
    if (
        err.message ===
        "There is no user record corresponding to this identifier. The user may have been deleted."
      ) {
        setInvalidEmail(true);
      } else if (
        err.message ===
        "The password is invalid or the user does not have a password."
      ) {
        setInvalidPassword(true);
      }
      setError(err.message);
  }
  dispatch(asyncActionFinished());
};

// LOGOUT USER
export const logOutUser = () => async dispatch => {
  await auth().signOut();
//   dispatch(getUserDetails(null));
  dispatch({
    type: LOGOUT_USER
  });
};
