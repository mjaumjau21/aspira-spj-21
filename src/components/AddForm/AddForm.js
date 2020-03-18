import React from 'react';
import styles from './AddForm.module.css';

const AddForm = () => {
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="GitHub username . . ."
        required
      />
      <button type="submit" className={styles.button}>Add card</button>
    </form>
  );
}

export default AddForm;
