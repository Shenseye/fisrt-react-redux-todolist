import React from 'react';
import { Link } from 'react-router';
import TodoApp from '../containers/TodoApp';
import styles from './HomeView.scss';

export default class HomeView extends React.Component {

  render() {
    return (
      <div className='container text-center'>
        <TodoApp className={styles['todo-app']}/>
        <hr />
        <Link to='/about'>Go To About View</Link>
      </div>
    );
  }
};
