import { createApolloFetch } from 'apollo-fetch';
import {
  GET_NOTES,
  GET_NOTE,
  CREATE_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
} from './gql';

const fetch = createApolloFetch({
  uri: 'https://api.graph.cool/simple/v1/cj8hc5qho01yq0183dywf9o4m',
});

export const getNotes = () => fetch({
  query: GET_NOTES,
});

export const getNote = id => fetch({
  query: GET_NOTE,
  variables: { id },
});

export const createNote = () => fetch({
  query: CREATE_NOTE,
});

export const updateNote = ({
  title,
  description,
  content,
}) => fetch({
  query: UPDATE_NOTE,
  variables: {
    title,
    description,
    content,
  },
});

export const deleteNote = id => fetch({
  query: DELETE_NOTE,
  variables: { id },
});
