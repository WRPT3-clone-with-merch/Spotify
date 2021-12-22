import React from "react";
import routes from "./routes";
import "./App.css";
import WebPlayback from "./Components/WebPlayback/WebPlayback"

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return (
    <div className="App">
      {routes}
    <WebPlayback />
    </div>
  );
}

export default App;
