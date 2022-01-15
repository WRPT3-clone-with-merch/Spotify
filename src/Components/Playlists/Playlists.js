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
    return (
      <Link to={`/playlist/${list.id}`}  key={list.id} className="playlist-preview">
        <div>
          <img className="playlist-image" src={list.images[0].url} alt="playlist" />
          <h3>{list.name}</h3>
          <p className="playlist-description">{list.description}</p>
        </div>
      </Link>
    );
  });

  return (
    <div className="playlists">
      {/* <h1>Playlists</h1> */}
      <div className="playlist-container">
        {playlistMap}
        <SideBar />
        <TopNavLibrary />
      </div>
    </div>
  );
};

export default Playlists;
