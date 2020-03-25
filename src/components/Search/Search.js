import React, { Component } from 'react';
import styles from './Search.module.css';

class Search extends Component {
  handleChange = (event) => {
    // TODO: do something
    console.log(event.target.value);
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

export default Search;
