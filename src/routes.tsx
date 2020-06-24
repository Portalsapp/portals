import React from 'react';
import { Route } from 'react-router';

/**
 * Import all page components here
 */
import App from './App';
import MainPage from './pages/main/MainScreen';
import ProfilePage from './pages/profile/ProfileScreen';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path='/' component={App}>
    <Route exact path='/' component={MainPage} />
    <Route path='/profile' component={ProfilePage} />
  </Route>
);
