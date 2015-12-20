import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import todos from './todos';

export default combineReducers({
  todos,
  router: routeReducer
});
