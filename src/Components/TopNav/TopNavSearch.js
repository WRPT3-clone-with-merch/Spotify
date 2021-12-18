import React, { useState } from 'react';
import axios from 'axios';
import './TopNav.css';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

const TopNavSearchComponent = (props) => {

  const style = { color: 'white' };
  const buttonStyle = { backgroundColor: 'black', borderRadius: '50%', border: '1px solid black', marginLeft: '20px', width: '30px', height: '30px' };

  return (
    <div className="top-nav">
      <div className="back-forward-arrows">
        <button className="arrow-btn" style={buttonStyle}><MdOutlineArrowBackIosNew style={style} /></button>
        <button className="arrow-btn" style={buttonStyle}><MdOutlineArrowForwardIos style={style} /></button>
      </div>
      <div className='search-input-container'>
        <input className='search-input' type='text' placeholder='Artists, Songs, or Podcasts'></input>
      </div>
      <div className="user-name">
        <button className='user-btn'>Name</button>
      </div>
    </div>
  )
}

export default TopNavSearchComponent;