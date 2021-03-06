import {
  GET_USER_DETAILS,
  CHANGE_USER_IMAGE,
  CHANGE_USER_DETAILS
} from "../../Types";
import { config, endPoint } from "../../config";
import { storage, database } from "../../config/firebase";

const usersRef = database().ref('users')

// GET USER DETAILS
export const getUserDetails = uid => async dispatch => {
  if(uid === null){
    dispatch({
      type: GET_USER_DETAILS,
      payload: { user: null }
    });
  }
  else{
    const user = await usersRef.child(uid).once('value')
    dispatch({
      type: GET_USER_DETAILS,
      payload: { user: user.val() }
    });
  }
};

// CHANGE USER IMAGE
export const changeUserImage = (file, body, setPercentage, closeModals) => async dispatch => {
  try {
    storage()
      .ref(`user_images/${body.user}/${file.name}`)
      .put(file)
      .on(
        "state_changed",
        snapshot => {
          const percentage = Math.floor(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setPercentage(percentage);
        },
        error => {
          console.log(error);
        },
        async () => {
          // error
          await storage()
            .ref(`user_images/${body.user}/`)
            .child(file.name)
            .getDownloadURL()
            .then(async url => {
              body.image = url;
              try {
              // const res = await axios.put(
              //     `${endPoint}/api/changeUserImage`,
              //     body,
              //     config
              //   );
                // dispatch({
                //   type: CHANGE_USER_IMAGE,
                //   payload: { user: res.data.user }
                // });
                closeModals()
              } catch (err) {
                console.error(err.message);
              }
            });
        }
      );
  } catch (err) {
    console.error(err.message);
  }
};
