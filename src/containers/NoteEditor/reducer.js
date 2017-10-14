import { fromJS } from 'immutable';
import {
  SELECT_NOTE,
} from './constants';

const initialState = fromJS({
  currentNoteID: '',
});

const noteListReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SELECT_NOTE:
      return state.set('currentNoteID', payload);

    default:
      return state;
  }
}

export default noteListReducer;
