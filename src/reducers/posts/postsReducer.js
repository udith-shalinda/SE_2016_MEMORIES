import { createReducer } from "../util/reducerUtil";
import {
  ADD_POSTS,
  GET_POSTS,
  EDIT_POSTS,
  DELETE_POSTS,
} from "../../Types";
const initialState = {
  pages: 0,
  posts: []
};

// ADD POSTS
const addPosts = (state) => {
  return state;
};

// GET POSTS
const getPosts = (state, payload) => {
  if (state.posts.length === 0) {
    return {
      pages: payload.pages,
      posts: payload.posts
    };
  } else {
    return {
      pages: payload.pages,
      posts: [...state.posts, ...payload.posts]
    };
  }
};

// EDIT POSTS
const editPosts = state => {
  return state;
};

// DELETE POSTS
const deletePosts = state => {
  return state;
};


export default createReducer(initialState, {
  [ADD_POSTS]: addPosts,
  [GET_POSTS]: getPosts,
  [EDIT_POSTS]: editPosts,
  [DELETE_POSTS]: deletePosts,
});
