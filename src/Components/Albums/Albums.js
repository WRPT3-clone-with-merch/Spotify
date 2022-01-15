import React, { useState, useEffect } from 'react';
import SideBar from '../SideBar/SideBar';
import TopNavLibrary from '../TopNav/TopNavLibrary';
import axios from 'axios';
import './Albums.css';
import { useToken } from "../../utils";
import { Link } from 'react-router-dom';

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

  const albumsMap = list.map((list) => {
    console.log(list.album.id);
    return (
      <Link to={`/album/${list.album.id}`} className="album-preview">
      <div className='following-albums' key={list.album.id}>
        <div className='following-albums-info'>
        <img className='album-image' src={list.album.images[1].url} />
        <h3 className='album-name'>{list.album.name}</h3>
        <h3 className='album-artists-name'>{list.album.artists[0].name}</h3>
        </div>
      </div>
      </Link>
    )
  })

  return (
    <div>
      <div>
        <p className='category'>Albums</p>
        <div className='following-albums-container'>
      {albumsMap}
        </div>
      <SideBar />
      <TopNavLibrary />
      </div>
    </div>
  )
}

export default AlbumsComponent;