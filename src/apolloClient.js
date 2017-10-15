import { createNetworkInterface, ApolloClient } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj8hc5qho01yq0183dywf9o4m',
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: obj => obj.id,
  reduxRootSelector: state => state.get('apollo'),
});

export default client;
