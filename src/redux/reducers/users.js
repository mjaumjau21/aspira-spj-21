import { SET_USER } from "../actions";

const initialState = {
  users: [
    {
      username: "luka",
      password: "1950",
      isAdmin: false,
    },
    {
      username: "kristian",
      password: "covid",
      isAdmin: true,
    },
  ],
  currentUser: {
    isAuth: false,
    isAdmin: false,
    username: "",
  },
};

function setUser(state, action) {
  const match = state.users.find(
    (user) =>
      user.username === action.payload.username &&
      user.password === action.payload.password
  );
  const user = match ? match : null;

  return {
    ...state,
    currentUser: {
      isAuth: Boolean(user),
      ...user,
    },
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return setUser(state, action);

    default:
      return state;
  }
}
