import React, { useState, useEffect } from "react";
import axios from "axios";
import { useToken } from "../../utils";
import SideBar from "../SideBar/SideBar";
import TopNavLibrary from "../TopNav/TopNavLibrary";

const Tracks = (props) => {
	const [tracks, setTracks] = useState([]);
	const token = useToken();

	useEffect(() => {
		try {
		axios.get(`https://api.spotify.com/v1/tracks`, {
			headers: {Authorization: `Bearer ${token}`}
		})
		.then(res => setTracks(res))
	}
		catch (err) {
      console.log(err);
    };
}, [token]);

let myTracks = tracks.map(track => {
	return (
		<div key={track.id} className="view">
			<img src={track.images[0].url}/>
			<h3>{tracks.title}</h3>
			<p>{tracks.description}</p>
		</div>
	);
});
console.log(myTracks)

return (
	<div >
		<div >
			{myTracks}
			<SideBar />
			<TopNavLibrary />
		</div>
	</div>
);
};

export default Tracks;