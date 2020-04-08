import React from 'react';
import styles from './Main.module.css';
import AddForm from '../AddForm/AddForm';
import CardList from '../CardList/CardList';
import PropTypes from 'prop-types';

const Main = (props) => {
  return (
    <main className={styles.containerFlexColumn}>
      <AddForm onAddCards={props.onAddCards} />
      <CardList cards={props.cards} />
    </main>
  );
}

Main.propTypes = {
  onAddCards: PropTypes.func,
  cards: PropTypes.array,
}

export default Main;
