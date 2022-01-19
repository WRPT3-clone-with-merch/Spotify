import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import TopNavLibrary from "../TopNav/TopNavLibrary";
import axios from "axios";
import { useToken } from "../../utils";

const GenreSeed = props => {
	const  [genre, setGenre] = useState([]);
	const token = useToken();

	useEffect(() => {
		try {
			axios.get(`https://api.spotify.com/v1/recommendations?seed_genres=country`)
			.then((res) => setGenre(res.data))
		}
		
		catch (err) {
      console.log(err);
    };
	}, [token]);

	let genreMap = genre.map(genre => {
		return(
			<ul>
				<li>{genre}</li>
			</ul>
		)
	})
	console.log(genre)

	return (
		<div >
			<div >
				{genreMap}
				<SideBar />
				<TopNavLibrary />
			</div>
		</div>
	);
	};
	
	export default GenreSeed;
