import { LOAD_ENTRIES, ADD_ENTRY } from '../actions/actions-types';

const initialState = [];

const entriesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_ENTRIES:
      return [
        ...action.payload,
      ];
    case ADD_ENTRY:
      return [
        action.payload,
        ...state,
      ];
    default:
      return state;
  }
};

export default entriesReducer;

