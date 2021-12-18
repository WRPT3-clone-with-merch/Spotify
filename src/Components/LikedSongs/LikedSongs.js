import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import TopNav from '../TopNav/TopNav';
import axios from 'axios';
import './LikedSongs.css';

const LikedSongsComponent = (props) => {

  return (
    <div>
      <SideBar />
      <TopNav />
    </div>
  )
}

export default LikedSongsComponent;