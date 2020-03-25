import React, { Component } from 'react';
import styles from './AddForm.module.css';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // TODO: do something
    alert('You have entered: ' + this.state.username);
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
export default AddForm;
