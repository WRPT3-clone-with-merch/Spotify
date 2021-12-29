import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TopNav.css';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { useToken } from "../../utils";

const TopNavSearchComponent = (props) => {
  const [user, setUser] = useState([]);
  const token = useToken();
  const [searchInput, setSearchInput] = useState('');

  const style = { color: 'white' };
  const buttonStyle = { backgroundColor: 'black', borderRadius: '50%', border: '1px solid black', marginLeft: '20px', width: '30px', height: '30px' };

  useEffect(() => {
    try {
      axios.get("https://api.spotify.com/v1/me/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(({ data }) => setUser(data))
    } catch (err) {
      console.log(err);
    }
  }, [token]);

  return (
    <div className="top-nav">
      <div className="back-forward-arrows">
        <button className="arrow-btn" style={buttonStyle}><MdOutlineArrowBackIosNew style={style} /></button>
        <button className="arrow-btn" style={buttonStyle}><MdOutlineArrowForwardIos style={style} /></button>
      </div>
      <div className='search-input-container'>
        <input className='search-input' type='text' placeholder='Artists, Songs, or Podcasts' onChange={(e) => {setSearchInput(e.target.value)}}></input>
      </div>
      <div className="user-name">
        <button className='user-btn'>{user.display_name}</button>
      </div>
    </div>
  )
}

export default TopNavSearchComponent;