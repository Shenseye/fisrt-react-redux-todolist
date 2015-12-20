import { createAction, handleActions } from 'redux-actions';

// -------------------------------
// Constants
// -------------------------------

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const COMPLETE_ALL = 'COMPLETE_ALL';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

// -------------------------------
// Actions
// -------------------------------

export const addTodo = createAction(ADD_TODO, text => text);
export const toggleTodo = createAction(TOGGLE_TODO, id => id);
export const deleteTodo = createAction(DELETE_TODO, id => id);
export const editTodo = createAction(EDIT_TODO, todo => todo);
export const clearCompletedTodo = createAction(CLEAR_COMPLETED);
export const completeAllTodo = createAction(COMPLETE_ALL);

export const actions = {
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo,
  clearCompletedTodo,
  completeAllTodo
};

// -------------------------------
// Reducer
// -------------------------------

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
];

export default handleActions({
  [ADD_TODO]: (state, { payload }) => {
    if (payload) {
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          text: payload,
          completed: false
        }
      ];
    }

    return state;
  },

  [TOGGLE_TODO]: (state, { payload }) => state.map(
    todo => todo.id === payload
      ? Object.assign({}, todo, { completed: !todo.completed })
      : todo
  ),

  [DELETE_TODO]: (state, { payload }) => state.filter(
    todo => todo.id !== payload
  ),

  [EDIT_TODO]: (state, { payload }) => state.map(
    todo => todo.id === payload.id
      ? Object.assign({}, todo, { text: payload.text })
      : todo
  ),

  [CLEAR_COMPLETED]: (state) => state.filter(
    todo => !todo.completed
  ),

  [COMPLETE_ALL]: (state) => state.map(
    todo => Object.assign({}, todo, { completed: true })
  )
}, initialState);
