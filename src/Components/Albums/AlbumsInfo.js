import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../SideBar/SideBar";
import TopNavLibrary from "../TopNav/TopNavLibrary";
import { useToken, SpotifyURL } from "../../utils";
import "./AlbumsInfo.css";

const AlbumsInfo = (props) => {
  const [albumInfo, setAlbumInfo] = useState([]);
  const [trackInfo, setTrackInfo] = useState([]);
  const [uriList, setUriList] = useState([]);
  const [header, setHeader] = useState([]);
  const token = useToken();

  useEffect(() => {
    try {
      axios
        .get(`${SpotifyURL}/albums/${props.match.params.id}/tracks?market=US`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          setTrackInfo(data.items);
          const uris = data.items.reduce((acc, curr) => {
            acc.push(curr.uri);
            return acc;
          }, []);
          setUriList(uris);
        });
      axios
        .get(`${SpotifyURL}/albums/${props.match.params.id}?market=US`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => setAlbumInfo([data]));
    } catch (err) {
      console.log(err);
    }
  }, [token, props.match.params.id]);

  const play = async (position) => {
    try {
      const req = await axios.get(`${SpotifyURL}/me/player/devices`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      axios.put(
        `${SpotifyURL}/me/player/play?device_id=${req.data.devices[0].id}`,
        {
          uris: uriList,
          offset: {
            position: +position,
          },
          position_ms: 0,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  console.log(albumInfo);
  console.log(trackInfo);

  const infoMap = trackInfo.map((trackInfo, index) => {
    return (
      <div key={index} className="track-container">
        <p>{index + 1}</p>
        <div className="track-info">
          <div className="album-tracks">
            <p className="title" onClick={() => play(index)}>{trackInfo.name}</p>
            <p className='artist-name'>{trackInfo.artists[0].name}</p>
          </div>
            <p className='duration'>{trackInfo.duration_ms}</p>
        </div>
      </div>
    );
  });

  const album = (albumInfo) => {
    return (
      <div className="album-info">
        <div className="album-image-main">
          <img
            src={albumInfo.images[1].url}
            className="album-image"
            alt="album cover"
          />
          <div className="album-main">
            <p>{albumInfo.artists.name}</p>
            <p>{albumInfo.name}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <TopNavLibrary />
      <div  className="album-tracks-container">
      <div className="header"></div>
      <div>
        <div>{album}</div>
        <SideBar />
        <div className="bar-above-tracks">
          <p className="hash">#</p>
          <p className="title">TITLE</p>
          <p className="duration">Duration</p>
        </div>
        <div>{infoMap}</div>
      </div>
    </div>
      </div>
  );
};

export default AlbumsInfo;