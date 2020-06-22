import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider as ReduxProvider } from 'react-redux';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import configureStore from './modules/store/configureStore';
const reduxStore = configureStore();

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            circles<span style={{ "color": "lightblue" }} >xd</span>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>  
    </ReduxProvider>
  );
}

export default withAuthenticator(App);
