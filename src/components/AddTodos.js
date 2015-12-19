import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/modules/todos';

export class AddTodo extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleClick(e) {
    const node = this.refs.input;
    const text = node.value.trim();
    this.props.addTodo(text);
    node.value = '';
  }

  render() {
    return (
      <div>
        <input type='text' ref='input' />
        <button onClick={e => this.handleClick(e)}>
          Add
        </button>
      </div>
    );
  }
}

export default connect(undefined, actions)(AddTodo);
