import React, { useState, useEffect } from "react";
import axios from "axios";
import { useToken } from "../../utils";

const Track = (props) => {
	const [track, setTrack] = useState([])
	const token = useToken();

	useEffect(() => {
		axios.get(`https://api.spotify.com/v1/tracks/{id}`)
}, [token]);

	return (
		<div>
			<input>
			</input>
		</div>
	)
}

export default Track