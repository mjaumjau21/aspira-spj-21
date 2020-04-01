import React from 'react';
import styles from './Main.module.css';
import AddForm from '../AddForm/AddForm';
import CardList from '../CardList/CardList';

const Main = (props) => {
  return (
    <main className={styles.containerFlexColumn}>
      <AddForm onAddCards={props.onAddCards} />
      <CardList cards={props.cards} />
    </main>
  );
}

export default Main;
