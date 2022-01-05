import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import TopNavLibrary from "../TopNav/TopNavLibrary";
import axios from "axios";
import { useToken } from "../../utils";
import { Link } from "react-router-dom";

const Recommendations  = props => {
	const[recommendations, setRecommendations] = useState([]);
	const token = useToken();

	useEffect(() => {
		try {
			axios.get('https://api.spotify.com/v1/recommendations', {
				headers: {Authorization: `Bearer ${token}`}
			})
			.then(res => setRecommendations(res.data))
		}
		catch (err) {
      console.log(err);
    }
	}, [token]);
}