import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateNavLink = ({ ...rest }) => {
  const { currentUser } = useSelector(state => state.users);
  const isAuth = currentUser.isAuth && currentUser.isAdmin;
  if(!isAuth) return null;
  return <NavLink {...rest} />
}

export default PrivateNavLink;
