import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import TopNavLibrary from '../TopNav/TopNavLibrary';
import axios from 'axios';
import './Artists.css';

const ArtistsComponent = (props) => {

  return (
    <div>
      <SideBar />
      <TopNavLibrary />
    </div>
  )
}

export default ArtistsComponent;