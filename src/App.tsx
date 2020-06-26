import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileScreen from './pages/profile/ProfileScreen';
import MainScreen from './pages/main/MainScreen';
import DocsScreen from './pages/docs/DocsScreen';
import DatabaseScreen from './pages/database/DatabaseScreen';
import SignInScreen from './pages/signIn/SignInScreen';
import PressScreen from './pages/press/PressScreen';
import LegalScreen from './pages/legal/LegalScreen';
import StatusScreen from './pages/status/StatusScreen';
import Header from './components/navbar/Header';
import { Container } from 'react-bootstrap';
import configureStore from './modules/store/configureStore';
const reduxStore = configureStore();

function App() {
  return (
    <div className="fill-window">
    <ReduxProvider store={reduxStore}>
      <Router>
        <Container fluid>
        <Header />
          <Switch>
            <Route path='/signin'>
              <SignInScreen />
            </Route>
            <Route path='/profile'>
              <ProfileScreen />
            </Route>
            <Route path='/docs'>
              <DocsScreen />
            </Route>
            <Route path='/press'>
              <PressScreen />
            </Route>
            <Route path='/legal'>
              <LegalScreen />
            </Route>
            <Route path='/status'>
              <StatusScreen />
            </Route>
            <Route path='/database'>
              <DatabaseScreen />
            </Route>
            <Route path='/'>
              <MainScreen />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ReduxProvider>
    </div>
  );
}

export default App;
