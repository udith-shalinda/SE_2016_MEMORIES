import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Image} from 'semantic-ui-react'
import { logOutUser } from '../../../actions/auth/authActions';

const HomePage = ({user, logOutUser}) => {
  return (
    <div>
      Home
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
      <button onClick={()=>logOutUser()}>Log Out</button>
      {user && <div>
        <Image src={user.image} />
        <p>{user.username}</p>
        <p>{user.email}</p>
      </div>}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {logOutUser})(HomePage);
