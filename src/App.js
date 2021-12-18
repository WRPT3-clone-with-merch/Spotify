import routes from "./routes";
import "./App.css";
import React from "react";
import LandingPageComponent from "./Components/LandingPage/LandingPage";
import HomePageComponent from "./Components/HomePage/HomePage";

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return code ? (
    <div className="App">
      <HomePageComponent />
      {routes}
    </div>
  ) : (
    <LandingPageComponent />
  );
}

export default App;
