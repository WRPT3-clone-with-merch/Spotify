import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import TopNavLibrary from '../TopNav/TopNavLibrary';
import axios from 'axios';
import './Library.css';

const LibraryComponent = (props) => {

  return (
    <div>
      <SideBar />
      <TopNavLibrary />
    </div>
  )
}

export default LibraryComponent;