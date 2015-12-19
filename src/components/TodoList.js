import React, { Component, PropTypes } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { actions } from '../redux/modules/todos';
import { VisibilityFilters } from '../redux/modules/visibilityFilter';

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
  }
}

function mapStateToProps(state) {
  return {
    todos: selectTodos(
      state.todos,
      state.visibilityFilter
    )
  };
}

export class TodoList extends Component {
  static propTypes = {
    toggleTodo: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
  }

  render() {
    const { todos, toggleTodo } = this.props;

    return (
      <ul>
         {todos.map((todo, index) =>
          <Todo
            {...todo}
            key={index}
            onClick={() => toggleTodo(index)}
          />
        )}
      </ul>
    );
  }
}

export default connect(mapStateToProps, actions)(TodoList);
