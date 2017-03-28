import { CHANGE_FILTER } from '../actions/actions-types';

const initialState = {};

const filtersReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
