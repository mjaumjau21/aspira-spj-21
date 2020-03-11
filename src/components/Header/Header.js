import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h4 className={styles.brand}>GitHub Manager</h4>
    </header>
  );
}

export default Header;
