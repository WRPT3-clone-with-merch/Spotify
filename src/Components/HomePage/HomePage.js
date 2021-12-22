import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import TopNav from '../TopNav/TopNav';
import axios from 'axios';
import './HomePage.css';
// import MusicPlayer from '../MusicPlayer/MusicPlayer';

const HomePageComponent = (props) => {

  return (
    <div>
      <SideBar />
      <TopNav />
      {/* <MusicPlayer /> */}
    </div>
  )
}

export default HomePageComponent;