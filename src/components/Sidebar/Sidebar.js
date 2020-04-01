import React from 'react';
import styles from './Sidebar.module.css';
import Search from '../Search/Search';

const Sidebar = (props) => {
  return (
    <aside className={styles.sidebar}>
      <h4 className={styles.title}>Find user</h4>
      <Search onFilterCards={props.onFilterCards} />
    </aside>
  );
}

export default Sidebar;
