import {
  CHANGE_PAGE,
  CHANGE_PER_PAGE,
  CHANGE_FILTER,
  ADD_ENTRY,
  CHANGE_SORT,
} from '../actions/actions-types';

const initialState = {
  currentPage: 0,
};

const paginationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case CHANGE_PER_PAGE:
    case CHANGE_FILTER:
    case ADD_ENTRY:
    case CHANGE_SORT:
      return initialState;
    default:
      return state;
  }
}

export default paginationReducer;
