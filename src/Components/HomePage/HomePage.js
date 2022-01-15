import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import TopNav from '../TopNav/TopNav';
import axios from 'axios';
import './HomePage.css';
import { useToken, SpotifyURL} from '../../utils';
import { Link } from 'react-router-dom';



const HomePageComponent = (props) => {

  const today = new Date();
  const token = useToken();
  const [playlist, setPlaylist] = useState([]);
  const [artists, setArtists] = useState([]);

  const greeting = () => {
    if(today.getHours() <= 11){
      return 'Good morning';
    } else if(today.getHours() > 11 && today.getHours() < 17){
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };

  useEffect(() => {
    try {
      axios
        .get(`${SpotifyURL}/me/playlists`, {
          params: { limit: 10, offset: 0 },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => setPlaylist(data.items));
        axios
        .get("https://api.spotify.com/v1/me/following?type=artist", {
          params: { limit: 20, offset: 0 },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => setArtists(data.artists.items));
    } catch (err) {
      console.log(err);
    }
  }, [token]);

  const playlistMap = playlist.map((playlist) => {
    return (
      <Link to={`/playlist/${playlist.id}`} className="playlist-link-home-page">
        <div key={playlist.id} className="home-page-playlist-preview">
          <img className="home-page-playlist-image" src={playlist.images[0].url} alt="playlist" />
          <h3 className='home-page-name'>{playlist.name}</h3>
        </div>
      </Link>
    );
  });

  const artistsMap = artists.map((artists) => {
    return (
      <div className='home-page-following-artists' key={artists.id}>
        <img className='home-page-artist-image' src={artists.images[2].url} />
        <div className='home-page-artist-info'>
        <h3 className='home-page-name'>{artists.name}</h3>
        </div>
      </div>
    )
  })

  return (
    <div className="home-page">
      <div className='home-page-greeting'>
        {greeting()}
      </div>
      <div className='home-page-user-content'>
        {playlistMap}
        {artistsMap}
      </div>
      <SideBar />
      <TopNav />
    </div>
  )
}

export default HomePageComponent;