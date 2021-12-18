import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import HomePage from './Components/HomePage/HomePage';
import Library from './Components/Library/Library';
import Merch from './Components/Merch/Merch';
import Search from './Components/Search/Search';

export default (
  <BrowserRouter>
    <Route exact path='/' component={LandingPage} />
    <Route path='/homepage' component={HomePage} />
    <Route path='/library' component={Library} />
    <Route path='/merch' component={Merch} />
    <Route path='/search' component={Search} />
  </BrowserRouter>
);