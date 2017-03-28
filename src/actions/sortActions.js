import { CHANGE_SORT } from './actions-types';

export const changeSort = field => ({
  type: CHANGE_SORT,
  payload: {
    field
  },
});

