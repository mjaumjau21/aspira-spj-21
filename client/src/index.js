import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import './styles/index.css';
import { Provider } from 'react-redux';
import configureStore from './redux/store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
