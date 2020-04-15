import React from 'react';
import styles from './Card.module.css';
import PropTypes from 'prop-types';

const Card = (props) => {
  const cardClass = `${styles.card} ${props.index % 2 ? styles.dark : ''}`;
  return (
    <div className={cardClass}>
      <img src={props.avatar_url} width="75" height="75" alt="avatar" />
      <div className={styles.content}>
        <div className={styles.title}>{props.name}</div>
        <div className={styles.description}>{props.company}</div>
      </div>
      <button className={styles.favoriteBttn} onClick={() => props.onBookmarkCard(props.id)}>
        &#9734;
      </button>
      <button className={styles.editBttn} onClick={() => props.onEditCard(props.id)}>
        &#9998;
      </button>
      <button className={styles.closeBttn} onClick={() => props.onRemoveCard(props.id)}>
        &times;
      </button>
    </div>
  );
}

Card.propTypes = {
  onRemoveCard: PropTypes.func,
  onEditCard: PropTypes.func,
  onBookmarkCard: PropTypes.func,
  index: PropTypes.number.isRequired,
  name: PropTypes.string,
  avatar_url: PropTypes.string,
  company: PropTypes.string,
}

Card.defaultProps = {
  name: 'Stranger',
}

export default Card;
