import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import TopNavLibrary from "../TopNav/TopNavLibrary";
import axios from "axios";
import { useToken } from "../../utils";
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

  console.log(list);

  const playlistMap = list.map((list) => {
    return (
      <div className="playlist-preview" key={list.id}>
        <img className="playlist-image" src={list.images[0].url} />
        <h3>{list.name}</h3>
        {/* <p className="playlist-description">{list.description}</p> */}
      </div>
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
