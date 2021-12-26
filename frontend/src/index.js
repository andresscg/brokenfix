import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/rootReducer';

const reduxStore = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={reduxStore}>
    <h2>hola</h2>
  </Provider>,
  document.getElementById('root')
);
