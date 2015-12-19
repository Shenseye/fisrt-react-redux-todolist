import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  todos,
  visibilityFilter,
  router: routeReducer
});
