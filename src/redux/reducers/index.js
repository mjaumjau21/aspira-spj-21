import { combineReducers } from 'redux';
import cards from './cards';
import users from './users';

let reducers = {
  cards,
  users
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
