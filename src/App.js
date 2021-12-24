import React, { useState } from "react";
import routes from "./routes";
import "./App.css";
import WebPlayback from "./Components/WebPlayback/WebPlayback";
import axios from 'axios';

const code = new URLSearchParams(window.location.search).get("code");

const App = (props) => {

  const { token, setToken } = useState(' ');

  const getToken = async () => {
    const response = await axios.get('/auth/token', {access_token})
    setToken(response.access_token);
  };

  return (
    <div className="App">
      {routes}
      {!token && }
      {token && 
    <WebPlayback />
      }
    </div>
  );
}

export default App;
