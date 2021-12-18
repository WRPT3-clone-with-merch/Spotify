import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import TopNav from '../TopNav/TopNav';
import axios from 'axios';
import './HomePage.css';

const HomePageComponent = (props) => {

  return (
    <div>
      <SideBar />
      <TopNav />
    </div>
  )
}

export default HomePageComponent;