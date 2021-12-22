import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import TopNavLibrary from '../TopNav/TopNavLibrary';
import axios from 'axios';
import './Albums.css';

const AlbumsComponent = (props) => {

  return (
    <div>
      <SideBar />
      <TopNavLibrary />
    </div>
  )
}

export default AlbumsComponent;