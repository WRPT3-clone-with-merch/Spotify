import React from "react";
import { Link } from "react-router-dom";
import "../Playlists/Playlists.css";
import "./Search.css";

const SearchPlaylists = ({ playlists, artist }) => {
  const playlistMap = playlists.map((list, index) => {
    if(index < 5){
      return (
        <Link to={`/playlist/${list.id}`} className="playlist-preview">
          <div key={index}>
            <img
              className="playlist-image"
              src={list.images[0].url}
              alt="playlist"
            />
            <h3>{list.name}</h3>
          </div>
        </Link>
      )
    }
  });

  const artistName = artist.map((artist, index) => {
    if(index === 0){
      return <h2 className="featuring-text">Featuring {artist.name}</h2>
    }
  })

  return (
    <div>
      {artistName}
      <div className="featuring-playlists">{playlistMap}</div>
    </div>
  )
};

export default SearchPlaylists;
