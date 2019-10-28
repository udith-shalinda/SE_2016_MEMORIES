import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from '../reducers/index';



const middlewares = [thunk];

const composeWithEnhancer = composeWithDevTools(
        applyMiddleware(...middlewares)
      )

export const configureStore = createStore(
  rootReducer,
  composeWithEnhancer
);
export default configureStore;
