import React from "react";
import "./AlbumsHeader.css";

const AlbumHeader = ({ name, description, images }) => {
  return (
    <header className="header-container">
      <img src={images[0].url} className="header-img" />
      <div className="header-info">
        <p>Album</p>
        <Link to={`/artists/${id}`}>
        <h1 className="header-name">{name}</h1>
        </Link>
        <p className="header-description">{description}</p>
      </div>
    </header>
  );
};

export default AlbumHeader;
