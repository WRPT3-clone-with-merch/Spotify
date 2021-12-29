import React, { useState, useEffect } from 'react';
import SideBar from '../SideBar/SideBar';
import TopNavLibrary from '../TopNav/TopNavLibrary';
import axios from 'axios';
import './Albums.css';
import { useToken } from "../../utils";

const AlbumsComponent = (props) => {
  const [list, setList] = useState([]);
  const token = useToken();

  useEffect(() => {
    try {
      axios
        .get("https://api.spotify.com/v1/me/albums", {
          params: { limit: 20, offset: 0 },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => setList(data.items));
    } catch (err) {
      console.log(err);
    }
  }, [token]);

  console.log(list);

  const albumsMap = list.map((list) => {
    return (
      <div className='following-albums-container' key={list.id}>
        <div className='following-albums'>
        <img className='artist-image' src={list.album.images[1].url} />
        <h3 className='album-name'>{list.album.name}</h3>
        <h3 className='album-artists-name'>{list.album.artists[0].name}</h3>
        </div>
      </div>
    )
  })

  return (
    <div>
      <div>
      {albumsMap}
      <SideBar />
      <TopNavLibrary />
      </div>
    </div>
  )
}

export default AlbumsComponent;