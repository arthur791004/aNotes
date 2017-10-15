import { createSelector } from 'reselect';

const selectDomain = state => state.get('noteEditor');

const selectApollo = state => state.get('apollo');

export const makeSelectCurrentNoteID = () => createSelector(
  selectDomain,
  domain => domain.get('currentNoteID'),
);

export const makeSelectCurrentNote = () => createSelector(
  selectApollo,
  makeSelectCurrentNoteID(),
  (apollo, noteID) => apollo.data[noteID]
);
