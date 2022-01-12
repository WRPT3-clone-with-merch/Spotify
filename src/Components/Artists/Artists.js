import React, { useState, useEffect } from 'react';
import SideBar from '../SideBar/SideBar';
import TopNavLibrary from '../TopNav/TopNavLibrary';
import axios from 'axios';
import './Artists.css';
import { useToken } from "../../utils";

const ArtistsComponent = (props) => {
  const [list, setList] = useState([]);
  const token = useToken();

  useEffect(() => {
    try {
      axios
        .get("https://api.spotify.com/v1/me/following?type=artist", {
          params: { limit: 20, offset: 0 },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => setList(data.artists.items));
    } catch (err) {
      console.log(err);
    }
  }, [token]);

  const artistsMap = list.map((list) => {
    return (
      <div className='following-artists' key={list.id}>
        <img className='artist-image' src={list.images[2].url} />
        <div className='artist-info'>
        <h3 className='artist-name'>{list.name}</h3>
        <p className='artist'>Artist</p>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div>
      <p className='artist-category'>Artists</p>
      <div className='artist-container'>
      {artistsMap}
      </div>
      <SideBar />
      <TopNavLibrary />
      </div>
    </div>
  )
}

export default ArtistsComponent;