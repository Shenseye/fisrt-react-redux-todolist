import { createAction, handleActions } from 'redux-actions';

// -------------------------------
// Constants
// -------------------------------

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// -------------------------------
// Other constants
// -------------------------------

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

// -------------------------------
// Actions
// -------------------------------

export const setVisibilityFilter = createAction(SET_VISIBILITY_FILTER, filter => filter);

export const actions = {
  setVisibilityFilter
};

// -------------------------------
// Reducer
// -------------------------------

export default handleActions({
  [SET_VISIBILITY_FILTER]: (state, { payload }) => payload
}, VisibilityFilters.SHOW_ALL);
