import React, { useState } from 'react';
import styles from './AddForm.module.css';

const AddForm = (props) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: temp solution, create a random user
    const randomUser = {
      id: Math.ceil(Math.random() * 100),
      name: username,
      avatar_url: "https://place-hold.it/75x75",
      company: `${username}'s company`
    };
    props.onAddCards(randomUser);
    setUsername('');
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        value={username}
        onChange={handleChange}
        type="text"
        placeholder="GitHub username . . ."
        required
      />
      <button type="submit" className={styles.button}>Add card</button>
    </form>
  );
}

export default AddForm;
