import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeCard, bookmarkCard } from '../../redux/actions';
import { deleteCard } from "../../services";
import { NavLink } from 'react-router-dom';
import styles from './Card.module.css';
import EditForm from '../../containers/EditForm/EditForm';
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

  handleDelete = async () => {
    await deleteCard(this.props.card.id);
    this.props.actions.removeCard(this.props.index);
  };

  render() {
    const cardClass = `${styles.card} ${this.props.index % 2 ? styles.dark : ''}`;
    return (
      <div className={cardClass}>
        <img src={this.props.card.avatar_url} width="75" height="75" alt="avatar" />
        {this.state.isEditing ? (
          <EditForm card={this.props.card} onToggleEditing={this.toggleEditing} />
        ) : (
          <CardDetails {...this.props} onToggleEditing={this.toggleEditing} onDelete={this.handleDelete} />
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
        <NavLink to={`/users/${props.card.id}`} className={styles.link}>
          See more
        </NavLink>
      </div>
      <button className={styles.favoriteBttn} onClick={() => props.actions.bookmarkCard(props.card.id)}>&#9734;</button>
      <button className={styles.editBttn} onClick={props.onToggleEditing}>&#9998;</button>
      <button className={styles.closeBttn} onClick={props.onDelete}>&times;</button>
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        removeCard,
        bookmarkCard
      },
      dispatch
    )
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Card);
