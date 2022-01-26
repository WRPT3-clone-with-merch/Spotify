import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import TopNavLibrary from "../TopNav/TopNavLibrary";
import axios from "axios";
import { useToken } from "../../utils";
import './Recommendations.css';

const Recommendations = () => {

const [genre, setGenre] = useState([]);
const [info, setInfo] = useState([]);
const [title, setTitle] = useState([]);
const [meta, setMeta] = useState([]);
const token = useToken();

	useEffect(() => {
		try {
			let promise1 = axios.get(`https://api.spotify.com/v1/me/top/artists`, {
				params: {limit: 5},
				headers: {Authorization: `Bearer ${token}`}
			});
			let promise2 = axios.get(`https://api.spotify.com/v1/recommendations/available-genre-seeds`, {
				headers: {Authorization: `Bearer ${token}`}
			});
			let promise3 = axios.get('https://api.spotify.com/v1/me/top/tracks', {
				params: {limit: 5},
				headers: {Authorization: `Bearer ${token}`}
			});
			Promise.all([promise1, promise2, promise3])
			.then(values => {
				setInfo(values[0].data.items);
				setGenre(values[1].data.genres);
				setTitle(values[2].data.items);
			
			}).catch(err => console.log(err));
		}
		catch (err) {
			console.log(err);
    };
	
	}, [token]);


	useEffect(() => {
		if(info.length){
		let artistSeeds = info.reduce((acc, curr) => {
			return acc += `${curr.id},`
		}, '');
		
		try{
			axios.get(`https://api.spotify.com/v1/recommendations?seed_artists=${artistSeeds}`, {
				headers: {Authorization: `Bearer ${token}`}
			})
			.then(({data}) => setMeta(data.tracks));
		}
		catch (err) {
			console.log(err);
    };
	}}, [info] );

	
	const recMap = info.map((seed, i) => {
		return (
			<div className='map' >
				<section key={i}>
					<h2 className="text">{seed.name}</h2>
					<img 
						src={seed.images[1].url}
						alt='artists'
						className="img"
						/>
				</section>
			</div>
		);
	});
	
	
	const songMap = title.map((seed, i) => {
		
		return (
			<div className='map' >
				<section key={i} >
					<h2 className="text">
						{seed.name}
					</h2>
					<img 
						src={seed.album.images[1].url}
						alt='track'
						className="img"
						/>
				</section>
			</div>
		);
	});
	
	const genreMap = genre.map((seed, i) => {
		if(i < 6){
			return (
				<section className="map">
					<div key={i}>
						<h2 className="text">
							{seed}
						</h2>
					</div>
				</section>
			);
		}
		else return null;
	});
	
	const list = meta.map((seed, i) => {
		if(i < 6){
		return (
			<div className='map' >
				<section key={i}>
					<h2 className="text">
						{seed.name}
					</h2>
					<img 
						src={seed.album.images[1].url}
						className="img"
						alt="image"
						/>
				</section>
			</div>
		);
			}
			else return null;
	});
	
	console.log(meta)
	
	return (

			<div >
				<section className="render">
					<div>
						<h1 className="suggested-songs">Suggested Songs</h1>
						{list}
					</div>
					<div>
						<h2 className="top-songs">Top Songs</h2>
						{songMap}
					</div>
					<div>
						<h1 className="suggested-genres">Sugessted Genres</h1>
						{genreMap}
					</div>
					<div>
						<h1 className="top-artists">Top Artists</h1>
						{recMap}
					</div>
				</section>
				<SideBar />
				<TopNavLibrary />
			</div>
	
	);
};

export default Recommendations;