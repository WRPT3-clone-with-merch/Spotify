import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import TopNavSearch from '../TopNav/TopNavSearch';
import axios from 'axios';
import './Search.css';

const SearchComponent = (props) => {

  return (
    <div>
      <SideBar />
      <TopNavSearch />
    </div>
  )
}

export default SearchComponent;