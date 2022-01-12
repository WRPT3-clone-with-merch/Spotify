import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import TopNavLibrary from "../TopNav/TopNavLibrary";
import axios from "axios";
import { useToken } from "../../utils";
import { Link } from "react-router-dom";

const GenreSeed = props => {
	const  [genre, setGenre] = useState([]);
	const token = useToken();

	useEffect(() => {
		try {
			axios.get(`https://api.spotify.com/v1/recommendations/available-genre-seeds`)
			.then(res => setGenre(res.data))
		}
		catch (err) {
      console.log(err);
    };
	}, [token]);

	let genreMao = genre.map(genre => {
		return(
			<ul>
				<li>{genre}</li>
			</ul>
		)
	})

	return (
		<div >
			<div >
				{genre}
				<SideBar />
				<TopNavLibrary />
			</div>
		</div>
	);
	};

	
	export default GenreSeed;
