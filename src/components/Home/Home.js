import React from 'react';
import styles from './Home.module.css';
import Login from '../../containers/Login/Login';

const Home = () => {
  return (
    <div className={styles.container}>
      <h2>Home</h2>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      <h3>Login</h3>
      <Login />
    </div>
  );
};

export default Home;