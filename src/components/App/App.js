import React, { Component } from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import Modal from '../Modal/Modal';
import EditForm from '../EditForm/EditForm';

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
      }],
      filteredCards: [],
      bookmarkedCards: [],
      isModalOpen: false,
      card: null,
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

  removeCard = id => {
    this.setState(prevState => ({
      cards: prevState.cards.filter(card => card.id !== id),
      filteredCards: prevState.filteredCards.filter(card => card.id !== id),
      bookmarkedCards: prevState.bookmarkedCards.filter(card => card.id !== id),
    }));
  };

  bookmarkCard = id => {
    if (this.state.bookmarkedCards.some(card => card.id === id)) {
      this.setState(prevState => ({
        bookmarkedCards: prevState.bookmarkedCards.filter(card => card.id !== id),
      }));
    } else {
      this.setState(prevState => ({
        bookmarkedCards: prevState.bookmarkedCards.concat(prevState.cards.find(card => card.id === id)),
      }));
    }
  };

  filterCards = (searchText) => {
    this.setState(prevState => ({
      filteredCards: prevState.cards.filter(card => {
        return card.name.toLowerCase().search(searchText.toLowerCase()) !== -1;
      })
    }));
  }

  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  editCard = id => {
    const card = this.state.cards.find(card => card.id === id);
    this.setState({ card });
    this.toggleModal();
  }

  updateCard = card => {
    const index = this.state.cards.findIndex(c => c.id === card.id);
    const indexF = this.state.filteredCards.findIndex(c => c.id === card.id);

    this.setState(prevState => ({
      cards: [
        ...prevState.cards.slice(0, index),
        card,
        ...prevState.cards.slice(index + 1)
      ],
      filteredCards: [
        ...prevState.filteredCards.slice(0, indexF),
        card,
        ...prevState.filteredCards.slice(indexF + 1)
      ],
    }), this.toggleModal());
  };

  render() {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.containerFlex}>
          <Sidebar onFilterCards={this.filterCards} cards={this.state.bookmarkedCards} />
          <Main cards={this.state.filteredCards} onAddCards={this.addCard} onRemoveCard={this.removeCard} onEditCard={this.editCard} onBookmarkCard={this.bookmarkCard} />
        </div>
        <Modal isOpen={this.state.isModalOpen} onClose={this.toggleModal}>
          <EditForm card={this.state.card} onUpdateCard={this.updateCard} />
        </Modal>
      </div>
    );
  }
}

export default App;
