import React from 'react';
import styles from './Favorite.module.css';
import PropTypes from 'prop-types';

const Favorite = (props) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Favorite users</h4>
      {props.cards.map((card) => (
        <img key={card.id} src={card.avatar_url} className={styles.avatar} alt="avatar" />
      ))}
    </div>
  );
}

Favorite.propTypes = {
  cards: PropTypes.array,
}

export default Favorite;
