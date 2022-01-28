import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import TopNavLibrary from "../TopNav/TopNavLibrary";
import axios from "axios";
import { useToken } from "../../utils";
import { Link } from "react-router-dom";
import "./LikedSongs.css";

const LikedSongsComponent = () => {
  const token = useToken();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("https://api.spotify.com/v1/me/tracks", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setUserList(res.data.items));
    } catch (err) {
      console.log(err);
    }
  }, [token]);



  const savedSongs = userList.map((song) => {
    const { album, name } = song.track;
    return (
      <Link className='liked-link' to={`/album/${album.id}`}>
        <section className="saved-songs" key={song.id}>
          <img src={album.images[0].url} alt="song" className="liked-song-img" />
          <h2 className="liked-song-title">{name}</h2>
        </section>
      </Link>
    );
  });

  return (
    <div>
      <div className="main">
        {savedSongs}
        <SideBar />
        <TopNavLibrary />
      </div>
    </div>
  );
};

export default LikedSongsComponent;
