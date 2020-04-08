import React, { Component } from 'react';
import styles from './AddForm.module.css';
import PropTypes from 'prop-types';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`https://api.github.com/users/${this.state.username}`);
      const json = await response.json();

      if (json.id) {
        this.props.onAddCards(json);
      } else {
        alert(`User ${this.state.username} does not exist.`);
      }
    } catch (error) {
      console.log(error);
    }

    this.setState({ username: '' });
  };

  handleChange = (event) => {
    this.setState({ username: event.target.value });
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          value={this.state.username}
          onChange={this.handleChange}
          type="text"
          placeholder="GitHub username . . ."
          required
        />
        <button type="submit" className={styles.button}>Add card</button>
      </form>
    );
  }
}

AddForm.propTypes = {
  onAddCards: PropTypes.func
};

export default AddForm;
