import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './App.module.css';
import About from '../../components/About/About';
import Header from '../../components/Header/Header';
import Home from '../../components/Home/Home';
import Sidebar from '../../components/Sidebar/Sidebar';
import Main from '../../components/Main/Main';
import Details from '../Details/Details';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.container}>
          <Header />
          <div className={styles.containerFlex}>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/users"
              render={() => (
                <div className={styles.containerFlex}>
                  <Sidebar cards={this.props.bookmarkedCards} />
                  <Main cards={this.props.filteredCards} />
                </div>
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/users/:id" component={Details} />
          </div>
        </div>
      </Router>
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
