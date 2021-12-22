import React, { useState } from 'react';
import axios from 'axios';
import './TopNav.css';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom';

const TopNavLibraryComponent = (props) => {

  const style = { color: 'white' };
  const buttonStyle = { backgroundColor: 'black', borderRadius: '50%', border: '1px solid black', marginLeft: '20px', width: '30px', height: '30px' };

  return (
    <div className="top-nav">
      <div className="arrows-and-music-btns">
      <div className="back-forward-arrows">
        <button className="arrow-btn" style={buttonStyle}><MdOutlineArrowBackIosNew style={style} /></button>
        <button className="arrow-btn" style={buttonStyle}><MdOutlineArrowForwardIos style={style} /></button>
      </div>
      <div className='music-btn-container'>
        <Link to='/playlists'>
        <button className='music-btn'>Playlists</button>
        </Link>
        <Link to='/podcasts'>
        <button className='music-btn'>Podcasts</button>
        </Link>
        <Link to='/artists'>
        <button className='music-btn'>Artists</button>
        </Link>
        <Link to='/albums'>
        <button className='music-btn'>Albums</button>
        </Link>
      </div>
      <div className="user-name">
        <button className='user-btn'>Name</button>
      </div>
      </div>
    </div>
  )
}

export default TopNavLibraryComponent;