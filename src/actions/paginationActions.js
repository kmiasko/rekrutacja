import { CHANGE_PAGE } from './actions-types';

export const changePage = pageNum => ({
  type: CHANGE_PAGE,
  payload: pageNum,
});

