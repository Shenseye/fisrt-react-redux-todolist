import { createAction, handleActions } from 'redux-actions';

// -------------------------------
// Constants
// -------------------------------

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// -------------------------------
// Actions
// -------------------------------

export const addTodo = createAction(ADD_TODO, text => text);

export const toggleTodo = createAction(TOGGLE_TODO, index => index);

export const actions = {
  addTodo,
  toggleTodo
};

// -------------------------------
// Reducer
// -------------------------------

export default handleActions({
  [ADD_TODO]: (state, { payload }) => {
    if (payload) {
      return [
        ...state,
        {
          text: payload,
          completed: false
        }
      ];
    }

    return state;
  },
  [TOGGLE_TODO]: (state, { payload }) => [
    ...state.slice(0, payload),
    Object.assign({}, state[payload], {
      completed: !state[payload].completed
    }),
    ...state.slice(payload + 1)
  ]
}, []);
