import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import HomePage from './Components/HomePage/HomePage';
import Library from './Components/Library/Library';
import Merch from './Components/Merch/Merch';
import Search from './Components/Search/Search';
import LikedSongs from './Components/LikedSongs/LikedSongs';
import CreatePlaylist from './Components/CreatePlaylist/CreatePlaylist';

export default (
  <BrowserRouter>
    <Route exact path='/' component={LandingPage} />
    <Route path='/homepage' component={HomePage} />
    <Route path='/library' component={Library} />
    <Route path='/merch' component={Merch} />
    <Route path='/search' component={Search} />
    <Route path='/liked-songs' component={LikedSongs} />
    <Route path='/create-playlist' component={CreatePlaylist} />
  </BrowserRouter>
);