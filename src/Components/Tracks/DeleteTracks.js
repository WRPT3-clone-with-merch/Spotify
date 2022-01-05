import React, { useState, useEffect } from "react";
import axios from "axios";
import { useToken } from "../../utils";

const DeleteTracks = props => {
	const token = useToken()
	const [deleteTrack, setDeleteTrack] = useState([])

	useEffect(() => {
		try {
			axios.delete(`https://api.spotify.com/v1/me/tracks/${props.match.params.ids}`, {
				headers: { Authorization: `Bearer ${token}` }
			}).then(({ data }) => setDeleteTrack({
				deleteTrack: data
			}))
		}
		catch (err) {
			console.log(err)
		};
	}, [token]);


};

export default DeleteTracks;