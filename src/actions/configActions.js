import { CHANGE_PER_PAGE } from './actions-types';

export const changePerPage = perPageNumber => ({
  type: CHANGE_PER_PAGE,
  payload: perPageNumber,
});
