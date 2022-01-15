import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import { Link } from "react-router-dom";
import TopNavLibrary from "../TopNav/TopNavLibrary";
import axios from "axios";
import { useToken } from "../../utils";
import "./Artists.css";

const ArtistsComponent = (props) => {
  const [list, setList] = useState([]);
  const token = useToken();
  // console.log(list);
  useEffect(() => {
    try {
      axios
        .get("https://api.spotify.com/v1/me/following?type=artist", {
          params: { limit: 20, offset: 0 },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => setList(data.artists.items));
    } catch (err) {
      console.log(err);
    }
  }, [token]);

  const artistsMap = list.map((list) => {
    return (
      <Link to={`/artist/${list.id}`} id="artist-link">
        <div  key={list.id}  className="following-artists">
          <img className="artist-image" src={list.images[2].url} />
          <div className="artist-info">
            <h3 className="artist-name">{list.name}</h3>
            <p className="artist">Artist</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <div>
        <p className="artist-category">Artists</p>
        <div className="artist-container">{artistsMap}</div>
        <SideBar />
        <TopNavLibrary />
      </div>
    </div>
  );
};

export default ArtistsComponent;
