import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Image } from 'semantic-ui-react'
import { logOutUser } from '../../../actions/auth/authActions';
import { Fade } from 'react-slideshow-image';
import Navigation from './../navigation/Navigation';
import './HomePage.css'


const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}


const HomePage = ({ user, logOutUser }) => {

  const PHOTO_SET = [
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      width: 1,
      height: 1
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
      width: 4,
      height: 3
    }
  ];
  useEffect(() => {
    scrollEventHandler();
  }, [])

  const scrollEventHandler = () => {
    window.addEventListener('scroll', event => {
      console.log(event);
      // document.getElementsByClassName('logoIcon').style.display = 'none'; 
    })
  }

  const showSlideShow = () => {
    return (
      PHOTO_SET.map((imageData) => {
        return (
          <div className="each-fade" >

            <div className="slideShowImageContainer" style={{ backgroundImage: `url(` + imageData.src + `)` }}>
            </div>
            <img src={imageData.src} className="slideShowImage" />
            <h2>First Slide</h2>
          </div>
        )
      })
    )
  }
  const showImages = () => {
    return (
      PHOTO_SET.map((imageData) => {
        return (
          <img src={imageData.src} className="image" />
        )
      })
    )
  }

  return (
    <div>
      Home
      <br />



      {/* <Link to="/login">Login</Link>
      <br/>
      <Link to="/profile">Profile</Link>
      <br />
      <Link to="/profileGallery">profilePage</Link>
      <br />
      <Link to="/register">Register</Link> */}

      {/* <Navigation></Navigation> */}


      {/* <br />
      <Link to="/upload">Upload</Link>
      <button onClick={() => logOutUser()}>Log Out</button> */}
      {user && <div>
        <Image src={user.image} />
        <p>{user.username}</p>
        <p>{user.email}</p>
      </div>}
      
      <div className="logoIcon">
        <Link to="/navigation">
          <img src="https://source.unsplash.com/zh7GEuORbUw/600x799" alt="sfsfs" />
        </Link>
      </div>

      <div>
        <Fade {...fadeProperties}>
          {showSlideShow()}
        </Fade>
      </div>


      <div className="imageContainer">
        {showImages()}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { logOutUser })(HomePage);
