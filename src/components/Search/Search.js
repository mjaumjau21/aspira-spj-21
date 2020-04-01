import React from 'react';
import styles from './Search.module.css';

const Search = (props) => {
  const handleChange = (event) => {
    props.onFilterCards(event.target.value);
  }

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search . . ."
        onChange={handleChange}
        required
      />
    </div>
  );
}

export default Search;
