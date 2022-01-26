import React, { useState, useEffect } from 'react';
import SideBar from '../SideBar/SideBar';
import TopNavLibrary from "../TopNav/TopNavLibrary";
import axios from 'axios';
import './LikedSongs.css';
import { useToken } from "../../utils";
import { Link } from "react-router-dom";

const LikedSongsComponent = () => {

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

	const savedSongs = userList.map((song) => {
		return(
			<Link to='/track/:id' className='saved-songs'>
        <section key={song.id}>
          <img 
            src={song.track.album.images[1].url} 
            alt='song'
            className='song-img'
            />
          <h2 className='liked-songs'>{song.track.name}</h2>
        </section>
      </Link>
		);
	});

	return (
    <div >
      <div className='main'>
        {savedSongs}
        <SideBar />
        <TopNavLibrary />
      </div>
    </div>
  );
};

export default LikedSongsComponent;