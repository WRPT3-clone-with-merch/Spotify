import React, { useEffect, useState } from "react";
import { useToken, SpotifyURL } from "../../utils";
import axios from "axios";
import TopNav from "../TopNav/TopNav";
import SideBar from "../SideBar/SideBar";
import ArtistHeader from "./ArtistHeader";
import ArtistTopTracks from "./ArtistTopTracks";
import ArtistAlbums from "./ArtistAlbums";
import RelatedArtists from "./RelatedArtists";
import "./ArtistPage.css";

const ArtistPage = (props) => {
  const token = useToken();
  const [artist, setArtist] = useState([]);
  // console.log(artist)

  useEffect(() => {
    try {
      axios
        .get(`${SpotifyURL}/artists/${props.match.params.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => setArtist([data]));
    } catch (err) {
      console.log(err);
    }
  }, [token, props.match.params.id]);

  const headerMap = artist.map(({ name, images }) => {
    return <ArtistHeader name={name} images={images} />;
  });

  return (
    <div className="artist-page">
      {headerMap}
      <ArtistTopTracks id={props.match.params.id} />
      <ArtistAlbums id={props.match.params.id} />
      <RelatedArtists id={props.match.params.id} />
      <TopNav />
      <SideBar />
    </div>
  );
};

export default ArtistPage;
