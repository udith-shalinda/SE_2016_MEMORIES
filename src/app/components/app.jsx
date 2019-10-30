import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";

// sementic ui
import "semantic-ui-css/semantic.min.css";

// Redux
import { Provider } from "react-redux";
import configureStore from "../../store/configureStore";

// Components
import HomePage from "./HomePage/HomePage";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { checkUserAuthState } from "../../actions/auth/authActions";
import UploadAlbum from "./UploadImages/UploadAlbum";

const store = configureStore;
store.dispatch(checkUserAuthState());

const App = ({ location }) => {
  return (
    <Provider store={store}>
          <Switch key={location.key}>
            <Route path="/" component={HomePage} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/upload" component={UploadAlbum} exact />
          </Switch>
    </Provider>
  );
};

export default withRouter(App);
