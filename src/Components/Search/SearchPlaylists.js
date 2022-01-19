import React from "react";
import { Link } from "react-router-dom";
import "../Playlists/Playlists.css";
import "./Search.css";

const SearchPlaylists = ({ playlists, artist }) => {
  const playlistMap = playlists.map((list, index) => {
    if(index < 4){
      return (
        <Link to={`/playlist/${list.id}`} key={list.id} className="playlist-preview" >
          <div>
            <img
              className="playlist-image"
              src={list.images[0].url}
              alt="playlist"
            />
            <h3>{list.name}</h3>
          </div>
        </Link>
      )
    } else return null;
  });

  const artistName = artist.map((artist, index) => {
    if(index === 0){
      return <h2 className="featuring-text">Featuring {artist.name}</h2>
    } else return null;
  })

  return (
    <div>
      {artistName}
      <div className="featuring-playlists">{playlistMap}</div>
    </div>
  )
};

export default SearchPlaylists;
