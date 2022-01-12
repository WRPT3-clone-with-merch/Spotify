import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import TopNavLibrary from '../TopNav/TopNavLibrary';
import axios from 'axios';
import './Podcasts.css';
import { useToken, SpotifyURL } from '../../utils';
import { Link } from 'react-router-dom';

const PodcastsComponent = (props) => {

  const [shows, setShows] = useState([]);

  const token = useToken();

  useEffect(() => {
    try {
      axios.get(`${SpotifyURL}/me/shows`, {
        params: { limit: 20, offset: 0 },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => setShows(data.items));
    } catch (err) {
      console.log(err);
    }
  }, [token])

  console.log(shows);

  const showsMap = shows.map((shows) => {
    return (
      <Link to={`/playlist/${shows.show.id}`} >
        <div className="shows-preview" key={shows.show.id}>
          <img className='shows-image' src={shows.show.images[0].url} alt='shows' />
          <h3>{shows.show.name}</h3>
        </div>
      </Link>
    )
    });

  return (
    <div>
    <div className='shows'>
      <p className='category'>Podcasts</p>
      <div className='shows-container'>
      {showsMap}
      </div>
    </div>
      <SideBar />
      <TopNavLibrary />
    </div>
  )
}

export default PodcastsComponent;