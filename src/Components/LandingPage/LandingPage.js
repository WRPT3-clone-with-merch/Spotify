import React from 'react';
import axios from 'axios';
import './LandingPage.css';
import Logo from '../../images/Spotify_Logo_RGB_White.png';
import { Link } from 'react-router-dom';

const LandingPageComponent = (props) => {

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