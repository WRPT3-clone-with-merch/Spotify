import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../SideBar/SideBar";
import TopNavLibrary from "../TopNav/TopNavLibrary";
import { useToken, SpotifyURL } from "../../utils";

const AlbumsInfo = (props) => {
  const [albumInfo, setAlbumInfo] = useState([]);
  const [uriList, setUriList] = useState([]);
  const [header, setHeader] = useState([]);
  const token = useToken();
  
  useEffect(() => {
    try {
      axios.get(`${SpotifyURL}/albums/${props.match.params.id}/tracks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setAlbumInfo(data.items);
        const uris = data.items.reduce((acc, curr) => {
          acc.push(curr.track.uri);
          return acc;
        }, []);
        setUriList(uris);
      });
      axios.get(`${SpotifyURL}/albums/${props.match.params.id}`, {
        headers: { 
          Authorization: `Bearer ${token}`
        },
      })
      .then(({ data }) => setHeader([data]));
    } catch (err) {
      console.log(err);
    }
  }, [token, props.match.params.id]);

  const headerMap = header.map(({ name, description, images}) => {
    return (
      <AlbumHeader name={name} description={description} images={images} />
    );
  });

  const play = async (position) => {
    try {
      const req = await axios.get(`${SpotifyURL}/me/player/devices`, {
        headers: { Authorization: `Bearer ${token}`},
      });
      axios.put(`${SpotifyURL}/me/player/play?device_id=${req.data.devices[0].id}`, {
        uris: uriList,
        offset: {
          position: +position,
        },
        position_ms: 0,
      },
      {
        headers: { Authorization: `Bearer ${token}`},
      });
    } catch (err) {
      console.log(err);
    }
  };

  console.log(albumInfo);

  const infoMap = albumInfo.map((album, index) => {
    const duration = new Date(album.track.duration_ms);

    return (
      <div key={index} className="album-container">
        <p>{index + 1}</p>
        <div className='album-image-main'>
          <img src={album.artists.images[1].url} 
          className='album-image'
          alt='album cover'
          onClick={() => play(index)} />
          <div className='album-main'>
            <p>{album.artists.name}</p>
            <p>{album.name}</p>
          </div>
        </div>
        <p>{`${duration.getMinutes()}:${duration.getSeconds()}`}</p>
      </div>
    )
  })

  return (
    <div>
      <TopNavLibrary />
      {albumsMap}
      <div className='album-info'>
        <div className='column-headers'>
          <ol>
            <li>#</li>
            <li>Title</li>
          </ol>
          <ol>
            <li>Album</li>
            <li>Duration</li>
          </ol>
        </div>
        <SideBar />
        <div>{infoMap}</div>
      </div>
    </div>
  )
}

export default AlbumsInfo;

