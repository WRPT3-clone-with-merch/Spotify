import React from "react";
import SideBar from "../SideBar/SideBar";
import TopNav from "../TopNav/TopNav";
import axios from "axios";
import "./LandingPage.css";

const LandingPageComponent = (props) => {
  const {
    REACT_APP_CLIENT_ID,
    REACT_APP_AUTHORIZE_URL,
    REACT_APP_REDIRECT_URL,
  } = process.env;

  const handleLogin = () => {
    window.location = `${REACT_APP_AUTHORIZE_URL}?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${REACT_APP_REDIRECT_URL}&show_dialog=true`;
  };

  return (
    <div>
      <h1>Applify</h1>
      <button type="submit" onClick={handleLogin}>
        Login with Spotify
      </button>
    </div>
  );
};

export default LandingPageComponent;
