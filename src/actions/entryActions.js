import db from '../utils/db';
import { LOAD_ENTRIES, ADD_ENTRY } from './actions-types';

export const addEntry = (username, title) => {
  const entry = db.add(username, title);
  return {
    type: ADD_ENTRY,
    payload: entry,
  };
}

export const loadEntries = entries => {
  return {
    type: LOAD_ENTRIES,
    payload: entries,
  };
};
