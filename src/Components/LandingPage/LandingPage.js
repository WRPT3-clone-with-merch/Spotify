import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import TopNav from '../TopNav/TopNav';
import axios from 'axios';
import './LandingPage.css';
import Logo from '../../images/Spotify_Logo_RGB_White.png';

const LandingPageComponent = (props) => {

  return (
    <div className='parent-div'>
      <img src={Logo} alt='Logo' className='logo-landing-page' />
    </div>
  )
}

export default LandingPageComponent;