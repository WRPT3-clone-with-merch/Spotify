import React, { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import TopNavLibrary from "../TopNav/TopNavLibrary";
import axios from "axios";
import "./Playlists.css";

const Playlists = (props) => {
  const [list, setList] = useState({})

  useEffect(() => {
    async function getToken() {
      const response = await axios.get("/auth/token");
      try {
        axios.get("https://api.spotify.com/v1/me/playlists", {
          params: { limit: 1, offset: 0 },
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + response.data.access_token,
            "Content-Type": "application/json",
          },
        }).then(({data}) => setList(data))
      } catch (err) {
        console.log(err);
      }
    }

    getToken();
  }, []);

  console.log(list)

  return (
    <div>
      <SideBar />
      <TopNavLibrary />
    </div>
  );
};

export default Playlists;
