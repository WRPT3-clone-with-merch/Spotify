import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useToken, SpotifyURL } from "../../utils";
import SearchComponent from "../Search/Search";
import "./TopNav.css";

const TopNavSearchComponent = (props) => {
  const [user, setUser] = useState([]);
  const [searchAlbum, setSearchAlbum] = useState([]);
  const [searchArtist, setSearchArtist] = useState([]);
  const token = useToken();
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    try {
      axios
        .get(`${SpotifyURL}/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => setUser(data));
    } catch (err) {
      console.log(err);
    }
  }, [token]);

  const handleSearch = async () => {
    try {
      const req = await axios.get(
        `${SpotifyURL}/search?q=artist%3A${searchInput}&type=artist%2Calbum`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: { market: "US", limit: 2, offset: 0, include_external: "audio"},
        }
      );
      setSearchAlbum(req.data.albums.items);
      setSearchArtist(req.data.artists.items);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <nav className="top-nav">
        <div className="back-forward-arrows">
          <button className="arrow-btn">
            <MdOutlineArrowBackIosNew />
          </button>
          <button className="arrow-btn">
            <MdOutlineArrowForwardIos />
          </button>
        </div>
        <div className="search-input-container">
          <input
            className="search-input"
            type="text"
            placeholder="Artists, Songs, or Podcasts"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="user-name">
          <button className="user-btn">{user.display_name}</button>
        </div>
      </nav>
      <SearchComponent albums={searchAlbum} artists={searchArtist} />
    </div>
  );
};

export default TopNavSearchComponent;
