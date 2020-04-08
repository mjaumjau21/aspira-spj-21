import React from 'react';
import styles from './CardList.module.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const CardList = (props) => {
  return (
    <div className={styles.container}>
      {props.cards.map((card, index) => (
        <Card key={card.id} index={index} {...card} onRemoveCard={props.onRemoveCard} />
      ))}
    </div>
  );
}

CardList.propTypes = {
  onRemoveCard: PropTypes.func,
  cards: PropTypes.array,
}

export default CardList;
