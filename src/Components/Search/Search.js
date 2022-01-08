import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import "./Search.css";

const SearchComponent = ({ albums, artists }) => {

  const albumsMap = albums.map((album, index) => {
    return (
      <h1 key={index}>{album.name}</h1>
    )
  })

  return (
    <div className="search-results">
      <h1>Search Results</h1>
      {albumsMap}
      <SideBar />
    </div>
  );
};

export default SearchComponent;
