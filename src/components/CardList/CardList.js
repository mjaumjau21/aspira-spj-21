import React from 'react';
import styles from './CardList.module.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const CardList = (props) => {
  return (
    <div className={styles.container}>
      {props.cards.map((card, index) => (
        <Card
          key={card.id}
          index={index}
          card={card}
          onRemoveCard={props.onRemoveCard}
          onUpdateCard={props.onUpdateCard}
          onBookmarkCard={props.onBookmarkCard}
        />
      ))}
    </div>
  );
}

CardList.propTypes = {
  onRemoveCard: PropTypes.func,
  onUpdateCard: PropTypes.func,
  onBookmarkCard: PropTypes.func,
  cards: PropTypes.array,
}

export default CardList;
