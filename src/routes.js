import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import HomePage from './Components/HomePage/HomePage';
import Library from './Components/Library/Library';
import Merch from './Components/Merch/Merch';
import Search from './Components/Search/Search';
import LikedSongs from './Components/LikedSongs/LikedSongs';
import CreatePlaylist from './Components/CreatePlaylist/CreatePlaylist';
import Artists from './Components/Artists/Artists';
import Albums from './Components/Albums/Albums';
import Playlists from './Components/Playlists/Playlists';
import PlaylistInfo from './Components/Playlists/PlaylistInfo';
import Podcasts from './Components/Podcasts/Podcasts';
import Tracks from './Components/Tracks/Tracks';
import Track from './Components/Tracks/Track';
import DeleteTracks from './Components/Tracks/DeleteTracks';
import SaveTracks from './Components/Tracks/SaveTracks';

export default (
  <BrowserRouter>
    <Route exact path='/' component={LandingPage} />
    <Route path='/homepage' component={HomePage} />
    <Route path='/library' component={Library} />
    <Route path='/merch' component={Merch} />
    <Route path='/search' component={Search} />
    <Route path='/liked-songs' component={LikedSongs} />
    <Route path='/create-playlist' component={CreatePlaylist} />
    <Route path='/artists' component={Artists} />
    <Route path='/albums' component={Albums} />
    <Route path='/playlists' component={Playlists} />
    <Route path='/playlist/:id' component={PlaylistInfo} />
    <Route path='/podcasts' component={Podcasts} />
    <Route path='/tracks' component={Tracks}/>
    <Route path='/delete-track/:ids' component={DeleteTracks}/>
    <Route path='/track/:id' component={Track}/>
    <Route path='/save-track/:ids' component={SaveTracks}/>
  </BrowserRouter>
);