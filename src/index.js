import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import configureStore from './store';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import apolloClient from './apolloClient';

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
  <ApolloProvider store={store} client={apolloClient}>
    <App />
  </ApolloProvider>
  , document.getElementById('root')
);

registerServiceWorker();
