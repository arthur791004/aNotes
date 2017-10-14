import {
  SELECT_NOTE
} from './constants';

export const selectNote = id => ({
  type: SELECT_NOTE,
  payload: id,
});
