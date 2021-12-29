import React, { useState, useEffect } from "react";
import axios from "axios";
import { useToken } from "../../utils";

const Tracks = (props) => {
	const [tracks, setTracks] = useState([])
	const token = useToken();

	useEffect(() => {
		try {
		axios.get(`https://api.spotify.com/v1/tracks`, {
			params: {market: US},
			headers: {Authorization: `Bearer ${token}`}
		}).then(({data}) => setTracks({
			album: data.tracks[0].name,
			artist: data.tracks[1][6],
			track: data.tracks[13]
		}))}
		catch (err) {
      console.log(err);
    }
}, [token]);

tracks.map(track => {
	return (
		<div key={track.id}>
			<img src={track.images[0].url}/>
			<h3>{track.name}</h3>
			<p>{track.description}</p>
		</div>
	)
})

return (
	<div className="playlists">
		<div className="playlist-container">
			{tracks}
			<SideBar />
			<TopNavLibrary />
		</div>
	</div>
);
}

export default Tracks