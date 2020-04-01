import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';

const initialCards = [
  {
    id: 1,
    name: 'Ivan Lovrić',
    avatar_url: "https://place-hold.it/75x75",
    company: "Profico"
  },
  {
    id: 2,
    name: 'Bruce Wayne',
    avatar_url: "https://place-hold.it/75x75",
    company: "Aspira"
  }, {
    id: 3,
    name: 'Jane Doe',
    avatar_url: "https://place-hold.it/75x75",
    company: "Workspace"
  }, {
    id: 4,
    name: 'Richard Roe',
    avatar_url: "https://place-hold.it/75x75",
    company: "Aspira"
  }
];

const App = () => {
  const [cards, setCards] = useState(initialCards);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    setFilteredCards(cards);
  }, [cards]);

  const addCard = card => {
    const results = [...cards, card];
    setCards(results);
  };

  const filterCards = searchText => {
    const results = cards.filter(card => card.name.toLowerCase().search(searchText.toLowerCase()) !== -1);
    setFilteredCards(results);
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.containerFlex}>
        <Sidebar onFilterCards={filterCards} />
        <Main cards={filteredCards} onAddCards={addCard} />
      </div>
    </div>
  );
}

export default App;
