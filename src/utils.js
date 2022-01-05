import React, { useState, useEffect } from "react";
import axios from "axios";

export const useToken = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    async function getToken() {
      try {
        const response = await axios.get("/auth/token");
        setToken(response.data.access_token);
      }
      catch {
        return;
      }
    }

    getToken();
  }, []);

  return token;
};

export const SpotifyURL = "https://api.spotify.com/v1";
