import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Image} from 'semantic-ui-react'
import { logOutUser } from '../../../actions/auth/authActions';
import Gallery from 'react-photo-gallery';
import { Fade } from 'react-slideshow-image';


const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}


const HomePage = ({user, logOutUser}) => {

  const PHOTO_SET = [
    {
      src: 'https://avatars2.githubusercontent.com/u/37300841?s=460&v=4',
      name:'sahana',
      width: 2,
      height: 3
    },
    {
      src: 'https://avatars3.githubusercontent.com/u/37531139?s=460&v=4',
      name:'sfsfsfs',
      width: 2,
      height: 1
    },
    {
      src: 'https://avatars0.githubusercontent.com/u/37216970?s=460&v=4',
      name:'fjfjfjf',
      width: 1,
      height: 3
    },
    {
      src: 'https://avatars0.githubusercontent.com/u/23637279?s=460&v=4',
      name:'kkkkk',
      width: 3,
      height: 1
    },
    {
      src: 'https://avatars3.githubusercontent.com/u/37531139?s=460&v=4',
      name:'gjgg',
      width: 4,
      height: 3
    },
    {
      src: 'https://avatars0.githubusercontent.com/u/37216970?s=460&v=4',
      name:'sahankhnf',
      width: 1,
      height: 1
    },
    {
      src: 'https://avatars2.githubusercontent.com/u/37300841?s=460&v=4',
      name:'yuiyiy',
      width: 4,
      height: 3
    },
    {
      src: 'https://avatars0.githubusercontent.com/u/37216970?s=460&v=4',
      name:'fffff',
      width: 1,
      height: 1
    }
  ];

  const showSlideShow = ()=>{
    return(
      PHOTO_SET.map((imageData)=>{
        return(
          <div className="each-fade">
              <div className="image-container">
                <img src={imageData.src} />
              </div>
              <h2>First Slide</h2>
            </div>
        )
      })
    )
  }

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
        <Fade {...fadeProperties}>
          {showSlideShow()}
        </Fade>
      </div>
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
