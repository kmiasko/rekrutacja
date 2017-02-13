import { CHANGE_PER_PAGE } from '../actions/actions-types';

const initialState = {
  activeUser: 'kmiasko',
  perPage: 5,
};

const configReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_PER_PAGE:
      return {
        ...state,
        perPage: parseInt(action.payload, 10),
      };
    default:
      return state;
  }
};

export default configReducer;

