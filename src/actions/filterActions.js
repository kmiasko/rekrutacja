import { CHANGE_FILTER } from './actions-types';

export const changeFilter = (field, value) => ({
  type: CHANGE_FILTER,
  payload: {
    [field]: value,
  },
});

