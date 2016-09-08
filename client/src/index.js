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
<<<<<<< HEAD
import ReduxPromise from 'redux-promise';
=======
>>>>>>> 1a6afcbf1e597987ebf76590063ac46ce08668e5

import reducers from './reducers/index.js';

// where our app will be rendered within index.html
let rootElement = document.getElementById('app');

// there exists only one store in redux and it is what contains our apps state
<<<<<<< HEAD
let createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
=======
let createStoreWithMiddleware = applyMiddleware()(createStore);
>>>>>>> 1a6afcbf1e597987ebf76590063ac46ce08668e5

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , rootElement);