import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import TopNavLibrary from "../TopNav/TopNavLibrary";
import axios from "axios";
import { useToken, SpotifyURL } from "../../utils";
import { Link } from "react-router-dom";
import "./Playlists.css";

const Playlists = (props) => {
  const [list, setList] = useState([]);
  const token = useToken();

  useEffect(() => {
    try {
      axios
        .get(`${SpotifyURL}/me/playlists`, {
          params: { limit: 10, offset: 0 },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => setList(data.items));
    } catch (err) {
      console.log(err);
    }
  }, [token]);

  const playlistMap = list.map((list) => {
    const { id, name, description, images } = list;

    if(images.length !== 0){
      return (
        <Link to={`/playlist/${id}`}  key={id} className="playlist-preview">
          <div>
            <img className="playlist-image" src={images[0].url} alt="playlist" />
            <h3 className='playlist-name'>{name}</h3>
            <p className="playlist-description">{description}</p>
          </div>
        </Link>
      )
    } else return null;
  });

  return (
    <div className="playlists">
      <div className='category'>
        <p>Playlists</p>
      </div>
      <div className="playlist-container">
        {playlistMap}
        <SideBar />
        <TopNavLibrary />
      </div>
    </div>
  );
};

export default Playlists;
