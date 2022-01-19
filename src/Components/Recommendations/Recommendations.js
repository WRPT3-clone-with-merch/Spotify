import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import TopNavLibrary from "../TopNav/TopNavLibrary";
import axios from "axios";
import { useToken } from "../../utils";
import './Recommendations.css'
import GenreSeed from "./GenreSeed";

const Recommendations = props => {

const [genre, setGenre] = useState([])
const [info, setInfo] = useState([]);
const [title, setTitle] = useState([])
const token = useToken();

	useEffect(() => {
		try {
			let promise1 = axios.get(`https://api.spotify.com/v1/me/top/artists`, {
				params: {limit: 5},
				headers: {Authorization: `Bearer ${token}`}
			})
			let promise2 = axios.get(`https://api.spotify.com/v1/recommendations/available-genre-seeds`, {
				headers: {Authorization: `Bearer ${token}`}
			})
			let promise3 = axios.get('https://api.spotify.com/v1/me/top/tracks', {
				params: {limit: 5},
				headers: {Authorization: `Bearer ${token}`}
			})
			Promise.all([promise1, promise2, promise3])
			.then(values => {
				setInfo(values[0].data.items);
				setGenre(values[1].data.genres);
				setTitle(values[2].data.items);
			}).catch(err => console.log(err))

		}
		catch (err) {
      console.log(err);
    }
	}, [token]);
  console.log(genre)
	

	const recMap = info.map((seed, i) => {
		
		return (
			<div className='map' >
				<section key={i} className="top-artist">
					<h2>{seed.name}</h2>
					<img 
						src={seed.images[2].url}
						alt='artists'
						/>
				</section>
			</div>
		)
	})

	const genreMap = genre.map((seed, i) => {
		if(i < 6){
			return (
				<section className="map">
					<div key={i} className="top-artist">
						<div>
							{seed}
						</div>
					</div>
				</section>
			)
		}
		else return null
	})

	const songMap = title.map((seed, i) => {
		
		return (
			<div className='map' >
				<section key={i} className="top-artist">
					<h2>{seed.name}</h2>
					<img 
						src={seed.album.images[2].url}
						alt='track'
						/>
				</section>
			</div>
		)
	})
	

	return (
		<div>
			<div className="box">
				<title>Artist</title>
				{songMap}
				{genreMap}
				{recMap}
				<GenreSeed />
				<SideBar />
				<TopNavLibrary />
			</div>
		</div>
	);
}

export default Recommendations;