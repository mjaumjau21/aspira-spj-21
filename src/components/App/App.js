import React, { Component } from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{
        id: 1,
        name: 'Ivan Lovrić',
        avatar_url: "https://place-hold.it/75x75",
        company: "Profico"
      },
      {
        id: 2,
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
      }],
      filteredCards: [],
    };
  }

  componentDidMount() {
    this.setState({ filteredCards: this.state.cards });
  }

  addCard = (card) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(card),
      filteredCards: prevState.filteredCards.concat(card)
    }));
  }

  render() {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.containerFlex}>
          <Sidebar />
          <Main cards={this.state.filteredCards} onAddCards={this.addCard} />
        </div>
      </div>
    );
  }
}

export default App;
