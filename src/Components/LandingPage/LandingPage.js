import React from 'react';
import axios from 'axios';
import './LandingPage.css';
import Logo from '../../images/Spotify_Logo_RGB_White.png';
import { Link } from 'react-router-dom';

const LandingPageComponent = (props) => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
  } = process.env;

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${REACT_APP_REDIRECT_URL}&show_dialog=true`;
  };

  return (
    <div className='parent-div'>
      <img src={Logo} alt='Logo' className='logo-landing-page' />
      <Link to='/homepage'>
      <button className='landing-btn'>Connect to Spotify</button>
      </Link>
    </div>
  )
};

export default LandingPageComponent;
