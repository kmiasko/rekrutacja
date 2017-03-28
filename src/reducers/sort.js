import { CHANGE_SORT, ADD_ENTRY } from '../actions/actions-types';

export const SORT_DESC = true;
export const SORT_ASC = false;

const sortReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case CHANGE_SORT:
      const sameField = (action.payload.field == state.field);
      const order = (sameField) ? !state.order : SORT_DESC;
      return {
        field: action.payload.field,
        order,
      };
    default:
      return state;
  }
};

export default sortReducer;
