import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import { useToken, SpotifyURL } from "../../utils";
import axios from "axios";
import PlaylistHeader from "./PlaylistHeader";
import "./PlaylistInfo.css";

const PlaylistInfo = (props) => {
  const [playlistInfo, setPlaylistInfo] = useState([]);
  const token = useToken();

  useEffect(() => {
    try {
      axios
        .get(
          `${SpotifyURL}/playlists/${props.match.params.id}/tracks`,
          {
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
    const dateAdded = new Date(playlist.added_at);
    return (
      <div key={index} className="track-container">
        <p>{index + 1}</p>
        <div className="track-image-main">
          <img
            src={playlist.track.album.images[2].url}
            className="list-album-cover"
            alt="album cover"
          />
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

  return (
    <div>
      <PlaylistHeader id={props.match.params.id} />

      <div className="playlist-info">
        <ul className="column-titles">
          <li>#</li>
          <li id="track-title">Title</li>
          <li id="album-title">Album</li>
          <li id="date-title">Date Added</li>
          <li>Duration</li>
        </ul>
        <SideBar />
        <div className="playlist">{infoMap}</div>
      </div>
    </div>
  );
};

export default PlaylistInfo;
