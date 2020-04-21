import React, { Component } from 'react';
import styles from './EditForm.module.css';
import PropTypes from 'prop-types';

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.card
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // TODO: implement update functionality
    this.props.onToggleEditing();
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className={styles.input}
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          type="text"
          placeholder="Name..."
        />
        <label htmlFor="company">Company</label>
        <input
          className={styles.input}
          name="company"
          value={this.state.company}
          onChange={this.handleChange}
          type="text"
          placeholder="Company..."
        />
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.button}>Update</button>
          <button type="reset" className={styles.button} onClick={this.props.onToggleEditing}>Cancel</button>
        </div>
      </form>
    );
  }
}

EditForm.propTypes = {
  card: PropTypes.object,
  onToggleEditing: PropTypes.func,
};

export default EditForm;
