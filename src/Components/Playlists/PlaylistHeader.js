import React from "react";
import "./PlaylistHeader.css";

const PlaylistHeader = ({ name, description, images }) => {
  return (
    <header className="header-container">
      <img src={images[0].url} className="header-img" />
      <div className="header-info">
        <p>Playlist</p>
        <h1 className="header-name">{name}</h1>
        <p className="header-description">{description}</p>
      </div>
    </header>
  );
};

export default PlaylistHeader;
