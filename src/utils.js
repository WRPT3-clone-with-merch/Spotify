import React, { useState, useEffect } from "react";
import axios from "axios";

export const useToken = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    async function getToken() {
      const response = await axios.get("/auth/token");
      setToken(response.data.access_token);
    }

    getToken();
  }, []);

  return token;
};
