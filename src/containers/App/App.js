import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './App.module.css';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Main from '../../components/Main/Main';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.containerFlex}>
          <Sidebar cards={this.props.bookmarkedCards} />
          <Main cards={this.props.filteredCards} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filteredCards: state.cards.filteredCards,
    bookmarkedCards: state.cards.bookmarkedCards
  };
}

export default connect(mapStateToProps)(App);
