import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import TopNavLibrary from "../TopNav/TopNavLibrary";
import axios from "axios";
import { useToken } from "../../utils";
import { Link } from "react-router-dom";
import "./Playlists.css";

const Playlists = (props) => {
  const [list, setList] = useState([]);
  const token = useToken();

  useEffect(() => {
    try {
      axios
        .get("https://api.spotify.com/v1/me/playlists", {
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

  const playlistMap = list.map((list, index) => {
    return (
      <Link to={`/playlist/${list.id}`} className="playlist-preview">
        <div key={index}>
          <img className="playlist-image" src={list.images[0].url} alt="playlist" />
          <h3>{list.name}</h3>
          <p className="playlist-description">{list.description}</p>
        </div>
      </Link>
    );
  });

  return (
    <div className="playlists">
      <div className="playlist-container">
        {playlistMap}
        <SideBar />
        <TopNavLibrary />
      </div>
    </div>
  );
};

export default Playlists;
