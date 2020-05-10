import React, { useState } from 'react';
import styles from './Login.module.css';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions';

const Login = () => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      username,
      password,
    };
    dispatch(setUser(user));
    setUsername('');
    setPassword('');
  };

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        value={username}
        onChange={handleChangeUsername}
        type="text"
        placeholder="Username..."
        required
      />
      <input
        className={styles.input}
        value={password}
        onChange={handleChangePassword}
        type="password"
        placeholder="Password..."
        required
      />
      <button type="submit" className={styles.button}>Login</button>
    </form>
  )
}

export default Login;