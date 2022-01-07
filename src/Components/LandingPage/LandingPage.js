import React from 'react';
import './LandingPage.css';
import Logo from '../../images/Spotify_Logo_RGB_White.png';

const LandingPageComponent = (props) => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
  } = process.env;

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${REACT_APP_REDIRECT_URL}&scope=streaming%20playlist-read-private%20user-follow-modify%20user-follow-read%20user-library-read%20user-modify-playback-state%20user-library-read%20user-read-playback-state%20user-read-private&show_dialog=true`;
  };

  return (
    <div className='parent-div'>
      <img src={Logo} alt='Logo' className='logo-landing-page' />
      <button className='landing-btn' onClick={handleLogin}>Connect to Spotify</button>
    </div>
  );
};

export default LandingPageComponent;
