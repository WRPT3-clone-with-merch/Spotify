import React, { useState, useEffect } from "react";
import axios from "axios";
import { useToken } from "../../utils";

const Track = (props) => {
	const [track, setTrack] = useState([])
	const token = useToken();

	useEffect(() => {
		try {
		axios.get(`https://api.spotify.com/v1/tracks/${id}`, {
			params: {market: US},
			headers: {Authorization: `Bearer ${token}`}
		}).then(({data}) => setTrack({
			album: data.album.name,
			artist: data.artists[6],
			track: data.name
		}))}
		catch (err) {
      console.log(err);
    }
}, [token]);
console.log(track)

track.map(track => {
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
			{track}
			<SideBar />
			<TopNavLibrary />
		</div>
	</div>
);
}

export default Track