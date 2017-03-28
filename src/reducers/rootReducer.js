import { combineReducers } from 'redux';
import config from './config';
import entries from './entries';
import filters from './filters';
import pagination from './pagination';
import sort from './sort';

export default combineReducers({
  config,
  entries,
  filters,
  pagination,
  sort,
});
