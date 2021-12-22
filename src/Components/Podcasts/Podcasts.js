import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import TopNavLibrary from '../TopNav/TopNavLibrary';
import axios from 'axios';
import './Podcasts.css';

const PodcastsComponent = (props) => {

  return (
    <div>
      <SideBar />
      <TopNavLibrary />
    </div>
  )
}

export default PodcastsComponent;