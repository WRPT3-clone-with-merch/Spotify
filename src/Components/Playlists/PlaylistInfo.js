import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import { useToken, SpotifyURL, play } from "../../utils";
import axios from "axios";
import PlaylistHeader from "./PlaylistHeader";
import "./PlaylistInfo.css";

const PlaylistInfo = (props) => {
  const [playlistInfo, setPlaylistInfo] = useState([]);
  const [header, setHeader] = useState([]);
  const [uriList, setUriList] = useState([]);
  const [track, setTrack] = useState("");
  const token = useToken();
  console.log({uriList});
  console.log({track});
  console.log({playlistInfo});


  useEffect(() => {
    try {
      axios
        .get(`${SpotifyURL}/playlists/${props.match.params.id}/tracks`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) =>{
          setPlaylistInfo(data.items)
          const uris = data.items.reduce((acc, curr) => {
            acc.push(curr.track.uri);
            return acc;
          }, []);
          setUriList(uris);
        });
      axios
        .get(`${SpotifyURL}/playlists/${props.match.params.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => setHeader([data]));
    } catch (err) {
      console.log(err);
    }
  }, [token, props.match.params.id]);

  const headerMap = header.map(({ name, description, images }) => {
    return (
      <PlaylistHeader name={name} description={description} images={images} />
    );
  });



  const play = async (position) => {
    try {
      const req = await axios.get(`${SpotifyURL}/me/player/devices`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      console.log(req.data);
      await axios.put(
        `${SpotifyURL}/me/player/play?device_id=${req.data.devices[0].id}`,
        {
          uris: uriList,
          offset: {
            position: +position,
          },
          position_ms: 0,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const infoMap = playlistInfo.map((playlist, index) => {
    const duration = new Date(playlist.track.duration_ms);
    const dateAdded = new Date(playlist.added_at);
    return (
      <div key={playlist.track.uri} className="track-container">
        <p>{index + 1}</p>
        <div className="track-image-main">
          <img
            src={playlist.track.album.images[2].url}
            className="list-album-cover"
            alt="album cover"
            onClick={() => play(index)}
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
      {headerMap}
      <div className="playlist-info">
        <div className="column-headers">
          <ul className="number-title">
            <li>#</li>
            <li>Title</li>
          </ul>
          <ul className="album-date-duration">
            <li>Album</li>
            <li id="playlist-date">Date Added</li>
            <li>Duration</li>
          </ul>
        </div>
        <SideBar />
        <div className="playlist">{infoMap}</div>
      </div>
    </div>
  );
};

export default PlaylistInfo;
