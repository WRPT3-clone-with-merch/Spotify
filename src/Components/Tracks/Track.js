import React from 'react'

export default function Track() {
	let res = axios.get(`https://api.spotify.com/v1/tracks/{id}`)


	return (
		<div>
			{	console.log(res.data) }
		</div>
	)
}
