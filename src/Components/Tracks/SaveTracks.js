import React, { useState, useEffect } from "react";
import axios from "axios";
import { useToken } from "../../utils";

const SaveTracks = props => {
	const token = useToken();
	const [saveTracks, setSavedTrack] = useState([]);

	useEffect(() => {
    try {
      axios
        .put(`https://api.spotify.com/v1/me/tracks/${props.match.params.id}`, {
          headers: { Authorization: `Bearer ${token}`},
        })
        .then(({ data }) => setSavedTrack({ saveTracks: data }));
    } catch (err) {
      console.log(err);
    };
  }, [token]);
};

export default SaveTracks;