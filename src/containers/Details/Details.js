import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Details.module.css';

const Details = (props) => {
  const card = props.cards.find(c => c.id === parseInt(props.match.params.id));
  if (!card) return null;
  return (
    <div className={styles.card}>
      <img src={card.avatar_url} width="100" height="100" alt="avatar" />
      <div className={styles.content}>
        <div className={styles.biography}>{card.bio}</div>
        <div className={styles.title}>{card.name}</div>
        <div className={styles.description}>{card.location}</div>
        <div className={styles.description}>{card.company}</div>
        <a href={card.blog} className={styles.description}>
          {card.blog}
        </a>
      </div>
      <NavLink to="/users" className={styles.link}>
        &larr;
      </NavLink>
    </div>
  );
};

function mapStateToProps(state) {
  return state.cards;
}

export default connect(mapStateToProps)(Details);
