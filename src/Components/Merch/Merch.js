import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import TopNavLibrary from "../TopNav/TopNavLibrary";
import axios from "axios";
import { useToken } from "../../utils";

const MerchComponent = (props) => {

  const  [genre, setGenre] = useState([]);
	const token = useToken();

	useEffect(() => {
		try {
			axios.get(`https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK`, {
				headers: {Authorization: `Bearer ${token}`}
			})
			.then(res => setGenre(res.data.tracks))
		}
		catch (err) {
      console.log(err);
    };
	}, [token]);
  console.log(genre)

	let genreMap = genre.map(genre => {
		return(
			<ul>
				<li>{genre}</li>
			</ul>
		)
	})

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

export default MerchComponent;