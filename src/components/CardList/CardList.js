import React from 'react';
import styles from './CardList.module.css';
import Card from '../Card/Card';

const CardList = (props) => {
  return (
    <div className={styles.container}>
      {props.cards.map((card, index) => <Card key={card.id} index={index} {...card} />)}
    </div>
  );
}

export default CardList;
