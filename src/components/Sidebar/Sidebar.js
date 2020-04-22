import React from 'react';
import styles from './Sidebar.module.css';
import Search from '../../containers/Search/Search';
import Favorite from '../Favorite/Favorite';
import PropTypes from 'prop-types';

const Sidebar = (props) => {
  return (
    <aside className={styles.sidebar}>
      <h4 className={styles.title}>Find user</h4>
      <Search />
      <Favorite cards={props.cards} />
    </aside>
  );
}

Sidebar.propTypes = {
  cards: PropTypes.array,
}

export default Sidebar;
