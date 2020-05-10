import React from 'react';
import { NavLink } from 'react-router-dom';
import PrivateNavLink from '../Router/PrivateNavLink';
import styles from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions';

const Header = () => {
  const { currentUser } = useSelector(state => state.users);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setUser({ username: '', password: '' }));
  } 

  return (
    <header className={styles.header}>
      <h4 className={styles.brand}>GitHub Manager</h4>
      <nav>
        <NavLink exact to="/" className={styles.link}>
          Home
        </NavLink>
        <NavLink to="/users" className={styles.link}>
          Users
        </NavLink>
        <PrivateNavLink to="/about" className={styles.link}>
          About
        </PrivateNavLink>
      </nav>
      {currentUser.isAuth ? (
        <div className={styles.buttonGroup}>
          <h4 className={styles.username}>Hello, {currentUser.username}!</h4>
          <button className={styles.button} onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
