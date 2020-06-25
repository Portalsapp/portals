import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileScreen from './pages/profile/ProfileScreen';
import MainScreen from './pages/main/MainScreen';
import DocsScreen from './pages/docs/DocsScreen';
import DatabaseScreen from './pages/database/DatabaseScreen';
import LoginScreen from './pages/login/LoginScreen';
import Header from './components/navbar/Header';
import { withAuthenticator } from '@aws-amplify/ui-react';
import configureStore from './modules/store/configureStore';
const reduxStore = configureStore();

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path='/login'>
              <LoginScreen />
            </Route>
            <Route path='/profile'>
              <ProfileScreen />
            </Route>
            <Route path='/docs'>
              <DocsScreen />
            </Route>
            <Route path='/database'>
              <DatabaseScreen />
            </Route>
            <Route path='/'>
              <MainScreen />
            </Route>
          </Switch>
        </div>
      </Router>
    </ReduxProvider>
  );
}

export default withAuthenticator(App);
