import React from 'react';
import styles from './Sidebar.module.css';
import Search from '../Search/Search';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <h4 className={styles.title}>Find user</h4>
      <Search />
    </aside>
  );
}

export default Sidebar;
