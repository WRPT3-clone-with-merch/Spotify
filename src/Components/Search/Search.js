import React from "react";
import SideBar from "../SideBar/SideBar";
import TopResult from "./TopResult";
import SearchPlaylists from "./SearchPlaylists";
import Recommendations from "../Recommendations/Recommendations";
import "./Search.css";

const SearchComponent = ({ albums, artists, playlists }) => {
  return (
    <div className="search-results">
      <h2>Top Result</h2>
      <TopResult artists={artists} />
      <Recommendations />
      <SearchPlaylists playlists={playlists} artist={artists} />
      <SideBar />
    </div>
  );
};

export default SearchComponent;
