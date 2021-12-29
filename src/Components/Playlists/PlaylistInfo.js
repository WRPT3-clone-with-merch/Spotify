import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import TopNavLibrary from "../TopNav/TopNavLibrary";
import { useToken } from "../../utils";
import axios from "axios";
import "./PlaylistInfo.css";

const PlaylistInfo = (props) => {
  const [playlistInfo, setPlaylistInfo] = useState([]);
  const token = useToken();

  useEffect(() => {
    try {
      axios
        .get(
          `https://api.spotify.com/v1/playlists/${props.match.params.id}/tracks`,
          {
            // params: { limit: 10 },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(({ data }) => setPlaylistInfo(data.items));
    } catch (err) {
      console.log(err);
    }
  }, [token, props.match.params.id]);

  const infoMap = playlistInfo.map((playlist, index) => {
    const duration = new Date(playlist.track.duration_ms);
    const dateAdded = new Date(playlist.added_at)
    return (
      <div key={index} className="track-container">
          <p>{index+1}</p>
        <div className="track-image-main">
          <img src={playlist.track.album.images[2].url} alt="album cover" className="list-album-cover"/>
          <div className="track-main">
            <p>{playlist.track.name}</p>
            <p>{playlist.track.artists[0].name}</p>
          </div>
        </div>
        <p className="list-album-name">{playlist.track.album.name}</p>
        <p>{`${dateAdded.getDay()} days ago`}</p>
        <p className="list-album-duration">{`${duration.getMinutes()}:${duration.getSeconds()}`}</p>
      </div>
    );
  });

  console.log(playlistInfo);

  return (
    <div className="playlist-info">
      <ul className="column-titles">
        <li>#</li>
        <li id="track-title">Title</li>
        <li id="album-title">Album</li>
        <li id="date-title">Date Added</li>
        <li>Duration</li>
      </ul>
      <SideBar />
      <TopNavLibrary />
      <div className="playlist">
        {infoMap}
      </div>
    </div>
  );
};

export default PlaylistInfo;
