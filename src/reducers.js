import { combineReducers } from 'redux-immutable';
import apolloClient from './apolloClient';

export default function createReducer(asyncReducers) {
  return combineReducers({
    apollo: apolloClient.reducer(),
    ...asyncReducers,
  });
}