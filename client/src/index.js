import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

// Components
import App from './components/App.jsx';

// Router
import {Router, browserHistory } from 'react-router';
// browerHistory pays attention to when there's a change to the url pathname
import routes from './routes'

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers/index.js';

// where our app will be rendered within index.html
let rootElement = document.getElementById('app');

// there exists only one store in redux and it is what contains our apps state

let createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
let createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , rootElement);
