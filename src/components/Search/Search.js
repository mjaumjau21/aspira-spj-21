import React, { Component } from 'react';
import styles from './Search.module.css';
import PropTypes from 'prop-types';

class Search extends Component {
  handleChange = (event) => {
    this.props.onFilterCards(event.target.value);
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

Search.propTypes = {
  onFilterCards: PropTypes.func
}

export default Search;
