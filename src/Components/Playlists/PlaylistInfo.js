import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import TopNavLibrary from "../TopNav/TopNavLibrary";
import { useToken } from '../../utils';
import "./PlaylistInfo.css";
import axios from "axios";

const PlaylistInfo = (props) => {
  const [playlistInfo, setPlaylistInfo] = useState([]);
  const token = useToken();

  useEffect(() => {
    try {
      axios.get(`https://api.spotify.com/v1/playlists/${props.match.params.id}/tracks`).then(({ data }) => setPlaylistInfo(data.items))
    } catch (err) {
      console.log(err);
    }
  }, [token, props.match.params.id])

  console.log(playlistInfo)

  return (
    <div className="playlist-info">
      <h1>Playlist Info</h1>
      <SideBar />
      <TopNavLibrary />
    </div>
  )
}

export default PlaylistInfo;
