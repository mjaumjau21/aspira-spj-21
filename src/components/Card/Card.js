import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.avatar_url} width="75" height="75" alt="avatar" />
      <div className={styles.content}>
        <div className={styles.title}>{props.name}</div>
        <div className={styles.description}>{props.company}</div>
      </div>
    </div>
  );
}

export default Card;
