import React from 'react';
import styles from './Search.module.css';

const Sidebar = () => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search . . ."
        required
      />
    </div>
  );
}

export default Sidebar;
