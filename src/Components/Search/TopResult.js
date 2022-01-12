import React from "react";
import { Link } from "react-router-dom";
import "./TopResult.css";

const TopResult = ({ artists }) => {
  const topArtist = artists.map((artist, index) => {
    if (index === 0) {
      return (
        <Link to={`/artist/${artist.id}`} className="top-result-link">
          <div key={index} className="top-result">
            <img className="top-image" src={artist.images[2].url} alt="artist-icon" />
            <div className="top-text">
              <h1>{artist.name}</h1>
              <p>ARTIST</p>
            </div>
          </div>
        </Link>
      );
    }
  });

  return <div>{topArtist}</div>;
};

export default TopResult;
