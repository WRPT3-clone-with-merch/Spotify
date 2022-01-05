import axios from "axios";
import React, { useState, useEffect } from "react";
import { useToken, SpotifyURL } from "../../utils";
import "./PlaylistHeader.css";

const PlaylistHeader = ({ id }) => {
  const [header, setHeader] = useState([]);
  const token = useToken();

  useEffect(() => {
    try {
      axios
        .get(`${SpotifyURL}/playlists/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => setHeader(data));
    } catch (err) {
      console.log(err);
    }
  }, [token, id]);

  console.log(header);

  const headerInfo = async () => {};

  return (
    <header className="header-container">
      {/* <img src={header[6][0].url} className="header-img"></img>
      <div className="header-info">
        <p>Playlist</p>
        <h1 className="header-name">{header[7]}</h1>
        <p className="header-description">{header[1]}</p>
        <ul>
          <li>{header[8].display_name}</li>
        </ul>
      </div> */}
    </header>
  );
};

export default PlaylistHeader;
