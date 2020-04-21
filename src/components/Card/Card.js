import React, { Component } from 'react';
import styles from './Card.module.css';
import EditForm from '../EditForm/EditForm';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    }
  }

  toggleEditing = () => {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    const cardClass = `${styles.card} ${this.props.index % 2 ? styles.dark : ''}`;
    return (
      <div className={cardClass}>
        <img src={this.props.card.avatar_url} width="75" height="75" alt="avatar" />
        {this.state.isEditing ? (
          <EditForm card={this.props.card} onToggleEditing={this.toggleEditing} />
        ) : (
          <CardDetails {...this.props} onToggleEditing={this.toggleEditing} />
        )}
      </div>
    );
  }
}

const CardDetails = (props) => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.title}>{props.card.name}</div>
        <div className={styles.description}>{props.card.company}</div>
      </div>
      <button className={styles.favoriteBttn}>&#9734;</button>
      <button className={styles.editBttn} onClick={props.onToggleEditing}>&#9998;</button>
      <button className={styles.closeBttn}>&times;</button>
    </>
  )
}

Card.propTypes = {
  index: PropTypes.number.isRequired,
  card: PropTypes.object,
}

Card.defaultProps = {
  name: 'Stranger',
}

export default Card;
