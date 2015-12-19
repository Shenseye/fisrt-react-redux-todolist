import React, { Component } from 'react';
import AddTodo from '../components/AddTodos';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

export default class App extends Component {
  render() {
    return (
      <div {...this.props}>
        <AddTodo />
        <TodoList />
        <Footer />
      </div>
    );
  }
}
