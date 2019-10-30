import { ADD_POSTS, GET_POSTS, EDIT_POSTS, DELETE_POSTS } from "../../Types";
import { storage, database } from "../../config/firebase";
import cuid from 'cuid'


// GET POSTS
export const getPosts = page => async dispatch => {
  
};

// ADD NEW POSTS
export const addPosts = (files, body, setPercentage) => async dispatch => {
  const albumsRef = database().ref('albums')
  console.log(body)
    try {
      await files.map(file => {
        storage()
          .ref(`images/${file.name}`)
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
                .ref(`images/`)
                .child(file.name)
                .getDownloadURL()
                .then(async url => {
                  try {
                    const id = cuid()
                    albumsRef.child(body.description).child(id).set({
                      image: url,
                      uid: body.user
                  })
                    dispatch({
                      type: ADD_POSTS
                    });
                  } catch (err) {
                    console.error(err.message);
                  }
                });
            }
          );
      });
    } catch (err) {
      console.error(err.message);
    }
  
};

// DELETE POST
export const deletePost = (id) => async  dispatch => {

}