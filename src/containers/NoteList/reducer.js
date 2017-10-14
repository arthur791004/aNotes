import { fromJS } from 'immutable';

const initialState = fromJS({

});

const noteListReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
}

export default noteListReducer;
