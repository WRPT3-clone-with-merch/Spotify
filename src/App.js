import React from "react";
import routes from "./routes";
import { useToken } from "./utils";
import "./App.css";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
