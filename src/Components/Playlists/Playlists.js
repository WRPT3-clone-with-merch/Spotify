import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import TopNavLibrary from '../TopNav/TopNavLibrary';
import axios from 'axios';
import './Playlists.css';

const PlaylistsComponent = (props) => {

  return (
    <div>
      <SideBar />
      <TopNavLibrary />
    </div>
  )
}

export default PlaylistsComponent;