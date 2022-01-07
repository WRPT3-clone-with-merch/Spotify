import React, { useState, useEffect } from 'react';
import SideBar from '../SideBar/SideBar';
import TopNavLibrary from "../TopNav/TopNavLibrary";
import axios from 'axios';
import './Merch.css';
import { useToken } from "../../utils";
import { Link } from "react-router-dom";

const MerchComponent = (props) => {
  const [userList, setUserList] = useState([]);
	const token = useToken();

	useEffect(() => {
    try {
      axios.get("https://api.spotify.com/v1/me/tracks", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(res => setUserList(res.data.items));
    } catch (err) {
      console.log(err);
    }
  }, [token]);
	console.log(userList)

	const savedSongs = userList.map((song) => {
		return(
			<Link to={`/track/{id}`}>
        <section key={song.id}>
          <img src={song.track.album.images[2].url}/>
          <h2>{song.track.name}</h2>
        </section>
      </Link>
		)
	})

	return (
    <div className="playlists">
      <div className="playlist-container">
        {savedSongs}
        <SideBar />
        <TopNavLibrary />
      </div>
    </div>
  );
}

export default MerchComponent;