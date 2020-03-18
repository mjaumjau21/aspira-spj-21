import React from 'react';
import styles from './CardList.module.css';
import Card from '../Card/Card';

const CardList = (props) => {
  return (
    <div className={styles.container}>
      {props.cards.map(card => <Card key={card.id} {...card} />)}
    </div>
  );
}

export default CardList;
