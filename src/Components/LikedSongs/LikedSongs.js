import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import TopNavLibrary from "../TopNav/TopNavLibrary";
import axios from "axios";
import { useToken } from "../../utils";
import { Link } from "react-router-dom";
import "./LikedSongs.css";

const LikedSongsComponent = () => {
<<<<<<< HEAD

=======
  const token = useToken();
>>>>>>> main
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
      <Link to={`/album/${album.id}`} className="saved-songs">
        <section key={song.id}>
<<<<<<< HEAD
          <img 
            src={song.track.album.images[1].url} 
            alt='song'
            className='song-img'
            />
          <h1 className='liked-songs'>{song.track.name}</h1>
        </section>
      </Link>
		);
	});

	return (
    <div>
    <div >
      <p className='liked-songs-text'>Liked Songs</p>
      <div className='main'>
=======
          <img src={album.images[2].url} alt="song" className="song-img" />
          <h2 className="title">{name}</h2>
        </section>
      </Link>
    );
  });

  return (
    <div>
      <div className="main">
>>>>>>> main
        {savedSongs}
      </div>
        <SideBar />
        <TopNavLibrary />
    </div>
    </div>
  );
};

export default LikedSongsComponent;
