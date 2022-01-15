import React, { useEffect, useState } from "react";
import axios from "axios";
import { useToken, SpotifyURL } from "../../utils";
import { Link } from "react-router-dom";
import "./ArtistPage.css";

const ArtistTopTracks = ({ id }) => {
  const token = useToken();
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(`${SpotifyURL}/artists/${id}/top-tracks?market=US`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => setTracks(data.tracks));
    } catch (err) {
      console.log(err);
    }
  }, [token, id]);
  console.log(tracks);

  const topTracks = tracks.map((track, index) => {
    const duration = new Date(track.duration_ms);
    if (index < 5) {
      return (
        <Link to={`/albums/${track.album.id}`} className="link" key={index}>
          <div className="top-track">
            <div className="top-track-1">
              <p>{index + 1}</p>
              <img
                src={track.album.images[2].url}
                alt="album art"
                className="top-track-img"
              />
            </div>
            <p className="top-track-name">{track.name}</p>
            <p className="top-track-duration">{`${duration.getMinutes()} : ${duration.getSeconds()}`}</p>
          </div>
        </Link>
      );
    } else return null;
  });

  return (
    <div className="top-tracks-container">
      <h1>Popular</h1>
      {topTracks}
    </div>
  );
};

export default ArtistTopTracks;
