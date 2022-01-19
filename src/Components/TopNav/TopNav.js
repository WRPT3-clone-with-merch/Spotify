import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { useToken, SpotifyURL } from "../../utils";
import { useHistory } from 'react-router-dom';
import './TopNav.css';

const TopNavComponent = (props) => {
  const [user, setUser] = useState([]);
  const token = useToken();
  const history = useHistory();

  useEffect(() => {
    try {
      axios.get(`${SpotifyURL}/me`, {
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
        <button className="arrow-btn" onClick={history.goBack}><MdOutlineArrowBackIosNew/></button>
        <button className="arrow-btn"><MdOutlineArrowForwardIos/></button>
      </div>
      <div className="user-name">
        <button className='user-btn'>{user.display_name}</button>
      </div>
    </div>
  )
}

export default TopNavComponent;
