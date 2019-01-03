import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore.js';

const store = configureStore();

window.onload = () => {
  ReactDOM.render(
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
      </Provider>
      , document.getElementById('main'));
};