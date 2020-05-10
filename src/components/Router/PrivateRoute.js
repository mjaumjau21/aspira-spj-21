import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useSelector(state => state.users);
  const isAuth = currentUser.isAuth && currentUser.isAdmin;
  return (
    <Route {...rest} render={props => (
      isAuth
        ? <Component {...props} />
        : <Redirect to="/" />
    )}/>
  )
}

export default PrivateRoute;
