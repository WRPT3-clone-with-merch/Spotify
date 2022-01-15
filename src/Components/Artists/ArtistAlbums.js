import React, { useState, useEffect } from "react";
import axios from "axios";
import { useToken, SpotifyURL } from "../../utils";
import "./ArtistPage.css";

const ArtistAlbums = ({ id }) => {
  const token = useToken();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(`${SpotifyURL}/artists/${id}/albums`, {
          params: {
            limit: 5,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => setAlbums(data.items));
    } catch (err) {
      console.log(err);
    }
  }, [token, id]);
  console.log(albums);

  // const playlistMap = list.map((list) => {
  //   return (
  //     <Link to={`/playlist/${list.id}`}  key={list.id} className="playlist-preview">
  //       <div>
  //         <img className="playlist-image" src={list.images[0].url} alt="playlist" />
  //         <h3>{list.name}</h3>
  //         <p className="playlist-description">{list.description}</p>
  //       </div>
  //     </Link>
  //   );
  // });

  const artistAlbums = albums.map((album, index) => {
    return (
      <div>
        <img src={album.images[1].url} alt="album art" />
        <h3>{album.name}</h3>
        <p>{album.release_date}</p>
      </div>
    )
  })

  return (
    <div className="artist-albums">
      <h1>Albums</h1>
      {artistAlbums}
    </div>
  );
};

export default ArtistAlbums;
