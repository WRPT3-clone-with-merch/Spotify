import React, { useState, useEffect } from "react";
import axios from "axios";
import { useToken } from "../../utils";

const SavedTracks = props => {
	const token = useToken()
	const [savedTracks, setSavedTracks] = useState([])

	useEffect(() => {
    try {
      axios
        .put(`https://api.spotify.com/v1/me/tracks${ids}`, {
					body: [],
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => setSavedTracks(data));
    } catch (err) {
      console.log(err);
    }
  }, [token]);



	return (
    <div className="playlists">
      <div className="playlist-container">
        {playlistMap}
        <SideBar />
        <TopNavLibrary />
      </div>
    </div>
  );
}