import { createAction } from '../../utils/action-helpers';

export const ADD_CARD = 'ADD_CARD';
export const addCard = createAction(ADD_CARD);

export const FILTER_CARDS = "FILTER_CARDS";
export const filterCards = createAction(FILTER_CARDS);
