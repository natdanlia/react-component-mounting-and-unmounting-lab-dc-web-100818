import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import manageRestaurants from './reducers/manageRestaurants';

const store = createStore(manageRestaurants, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
=======

import Game from './components/Game';
import './style.css';

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
>>>>>>> 41d3ff995dc1268120a8b175dcc23bc71adca1f3
