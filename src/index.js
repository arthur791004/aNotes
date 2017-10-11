import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo';
import configureStore from './store';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const initialState = {};
const store = configureStore(initialState);

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj8hc5qho01yq0183dywf9o4m',
});

const client = new ApolloClient({
  networkInterface,
});

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
  , document.getElementById('root')
);

registerServiceWorker();
