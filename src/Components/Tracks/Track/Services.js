import React from "react";
import axios from "axios";

export default FindTrack = async function() {
	try {
		let res = await axios.get(`https://api.spotify.com/v1/tracks/${id}`)
	}
	catch(err){
		console.log(err)
	}
	
}
