import { createSelector } from 'reselect';

const selectDomain = state => state.get('noteEditor');

export const makeSelectCurrentNoteID = () => createSelector(
  selectDomain,
  domain => domain.get('currentNoteID'),
);
