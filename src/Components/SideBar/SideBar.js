import React, { useState } from 'react';
import axios from 'axios';
import './SideBar.css';
import Logo from '../../images/Spotify_Logo_RGB_White.png';

const SideBarComponent = (props) => {

  return (
    <div className='side-bar'>
      <div className='home-search-library-container'>
      <img src={Logo} alt='Logo' />
      <button className='home-btn'>Home</button>
      <button className='search-btn'>Search</button>
      <button className='your-library-btn'>Your Library</button>
      </div>
      <div className='playlist-liked-songs'>
        <button className='create-playlist-btn'>Create Playlist</button>
        <button className='liked-songs-btn'>Liked Songs</button>
      </div>
    </div>
  )
}

export default SideBarComponent;