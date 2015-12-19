import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { actions } from '../redux/modules/visibilityFilter';

function mapStateToProps(state) {
  return {
    filter: state.visibilityFilter
  };
}

export class Footer extends Component {
  static propTypes = {
    setVisibilityFilter: PropTypes.func.isRequired,
    filter: PropTypes.oneOf([
      'SHOW_ALL',
      'SHOW_COMPLETED',
      'SHOW_ACTIVE'
    ]).isRequired
  }

  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return name;
    }

    return (
      <a
        href='#'
        onClick={e => {
          e.preventDefault();
          this.props.setVisibilityFilter(filter);
        }}
      >
        {name}
      </a>
    );
  }

  render() {
    return (
      <p>
        Show:
        {' '}
        {this.renderFilter('SHOW_ALL', 'All')}
        {', '}
        {this.renderFilter('SHOW_COMPLETED', 'Completed')}
        {', '}
        {this.renderFilter('SHOW_ACTIVE', 'Active')}
        .
      </p>
    );
  }
}

export default connect(mapStateToProps, actions)(Footer);
