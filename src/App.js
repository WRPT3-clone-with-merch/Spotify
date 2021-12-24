import React, { useState, useEffect } from "react";
import routes from "./routes";
import "./App.css";
import WebPlayback from "./Components/WebPlayback/WebPlayback";
import axios from 'axios';
import { useToken } from './utils';


const App = (props) => {

  const token = useToken();

  return (
    <div className="App">
      {routes}
      {token ? <WebPlayback /> : null}
    </div>
  );
}

export default App;
