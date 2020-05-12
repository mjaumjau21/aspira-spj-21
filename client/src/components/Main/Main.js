import React from 'react';
import styles from './Main.module.css';
import AddForm from '../../containers/AddForm/AddForm';
import CardList from '../CardList/CardList';
import PropTypes from 'prop-types';

const Main = (props) => {
  return (
    <main className={styles.containerFlexColumn}>
      <AddForm />
      <CardList cards={props.cards} />
    </main>
  );
}

Main.propTypes = {
  cards: PropTypes.array,
}

export default Main;
