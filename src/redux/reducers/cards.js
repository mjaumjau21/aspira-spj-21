import { ADD_CARD } from '../actions';

const initialState = {
  cards: [
    {
      id: 31274389,
      name: 'Ivan Lovrić',
      avatar_url: 'https://avatars3.githubusercontent.com/u/31274389?v=4',
      company: 'Aspira'
    }
  ],
  filteredCards: [
    {
      id: 31274389,
      name: 'Ivan Lovrić',
      avatar_url: 'https://avatars3.githubusercontent.com/u/31274389?v=4',
      company: 'Aspira'
    }
  ],
  bookmarkedCards: []
};

function addCard(state, action) {
  return {
    ...state,
    cards: [...state.cards, action.payload],
    filteredCards: [...state.cards, action.payload]
  };
}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      return addCard(state, action);

    default:
      return state;
  }
}
