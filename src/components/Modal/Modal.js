import React from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = (props) => {
  if (!props.isOpen) return null;
  return (
    <>
      <div className={styles.modal} onClick={props.onClose}></div>
      <section className={styles.modalContent}>
        {props.children}
        <button className={styles.closeBttn} onClick={props.onClose}>
          &times;
        </button>
      </section>
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
};

export default Modal;

