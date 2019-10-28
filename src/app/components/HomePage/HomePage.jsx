import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Image} from 'semantic-ui-react'
import { logOutUser } from '../../../actions/auth/authActions';
import Gallery from 'react-photo-gallery';

const HomePage = ({user, logOutUser}) => {

  const PHOTO_SET = [
    {
      src: 'https://avatars2.githubusercontent.com/u/37300841?s=460&v=4',
      width: 2,
      height: 3
    },
    {
      src: 'https://avatars3.githubusercontent.com/u/37531139?s=460&v=4',
      width: 2,
      height: 1
    },
    {
      src: 'https://avatars0.githubusercontent.com/u/37216970?s=460&v=4',
      width: 1,
      height: 3
    },
    {
      src: 'https://avatars0.githubusercontent.com/u/23637279?s=460&v=4',
      width: 3,
      height: 1
    },
    {
      src: 'http://example.com/example/img1.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'http://example.com/example/img2.jpg',
      width: 1,
      height: 1
    },
    {
      src: 'http://example.com/example/img1.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'http://example.com/example/img2.jpg',
      width: 1,
      height: 1
    }
  ];

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

      <div>    
        <Gallery photos={PHOTO_SET} />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {logOutUser})(HomePage);
