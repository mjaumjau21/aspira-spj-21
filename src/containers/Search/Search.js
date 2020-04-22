import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { filterCards } from '../../redux/actions';
import styles from './Search.module.css';

class Search extends Component {
  handleChange = (event) => {
    this.props.actions.filterCards(event.target.value);
  };

  render() {
    return (
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search . . ."
          onChange={this.handleChange}
          required
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        filterCards
      },
      dispatch
    )
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Search);
