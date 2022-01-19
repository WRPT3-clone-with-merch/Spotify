import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../SideBar/SideBar";
import TopNavLibrary from "../TopNav/TopNavLibrary";
import { useToken, SpotifyURL } from "../../utils";
import "./PodcastInfo.css";

const PodcastInfo = (props) => {
  const [podcastInfo, setPodcastInfo] = useState([]);
  const  [uriList, setUriList] = useState([]);
  const token = useToken();
  const [shows, setShows] = useState([]);

  useEffect(() => {
    try {
      axios.get(`${SpotifyURL}/shows/${props.match.params.id}/episodes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({data}) => {
        setPodcastInfo(data.items);
        const uris = data.items.reduce((acc, curr) => {
          acc.push(curr.uri);
          return acc;
        }, []);
        setUriList(uris);
      });
      axios.get(`${SpotifyURL}/me/shows`, {
        params: {limit: 1, offset: 0 },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => setShows(data.items));
    } catch (err) {
      console.log(err);
    }
  }, [token, props.match.params.id]);

  const play = async (position) => {
    try {
      const req = await axios.get(`${SpotifyURL}/me/player/devices`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await axios.put(
        `${SpotifyURL}/me/player/play?device_id=${req.data.devices[0].id}`,
        {
          uris: uriList,
          offset: {
            position: +position,
          },
          position_ms: 0,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  console.log(podcastInfo);

  const infoMap = podcastInfo.map((podcastInfo, index) => {
    const duration = new Date(podcastInfo.duration_ms);
    const dateAdded= new Date(podcastInfo.release_date);
    const seconds = `${(duration.getSeconds() < 10 ? '0' : '')}${duration.getSeconds()}`;

    return (
      <div key={index} onClick={() => play(index)} className='podcast-info-container'>
        <div className='podcast-image-details'>
          <img  className='podcast-main-image' src={podcastInfo.images[1].url} alt='podcast cover image' />
          <div className='podcast-description'>
            <p className='podcast-name-of-show'>{podcastInfo.name}</p>
            <p className='podcast-description-info-page'>{podcastInfo.html_description}</p>
          </div>
        </div>
      </div>
    )
  }) 

  const showsMap = shows.map((shows) => {
    return (
        <div className="shows-preview-info-page" key={shows.show.id}>
          <img className='shows-image-info-page' src={shows.show.images[0].url} alt='shows' />
          <div className='podcast-publisher-info'>
            <p>PODCAST</p>
          <h3 className='show-name-info-page'>{shows.show.name}</h3>
          <h4 className='publisher-info-page'>{shows.show.publisher}</h4>
          </div>
        </div>
    )
    });

  return (
    <div>
      <TopNavLibrary />
      <SideBar />
      <div className='podcast-info-header'>
        {showsMap}
      </div>
      <div className='podcast-info-container'>
        {infoMap}
      </div>
    </div>
  )

}

export default PodcastInfo;