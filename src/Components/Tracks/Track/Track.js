import React, { useEffect, useState } from "react";
import axios from "axios";
import { FindTrack } from "./Services";

const Track = props => {
	const [track, setTrack] = useState([])

	useEffect(props => {
		setTrack(FindTrack())
	}, [])

	console.log(res, FindTrack())

	return (
		<div>
			
		</div>
	)
};

export default Track;