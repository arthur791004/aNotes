import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj8hc5qho01yq0183dywf9o4m',
});

const client = new ApolloClient({
  networkInterface,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('root')
);

registerServiceWorker();
