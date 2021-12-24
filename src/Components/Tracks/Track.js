import React, { useState } from 'react'

const Track = (props) => {
	const [track, setTrack] = useState('')

	const getTrack = axios.get(`https://api.spotify.com/v1/tracks/{id}`)
		.then

	return (
		<div>
			<input>
			</input>
		</div>
	)
}

export default Track