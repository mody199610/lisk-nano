import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import * as reducers from './reducers';
import env from '../constants/env';

reducers.toastr = toastrReducer;

// Create Logger if not in production mode
const middleWares = [];
if (env.development) {
  const { logger } = require('redux-logger');
  middleWares.push(logger);
}

const App = combineReducers(reducers);

const store = createStore(App, applyMiddleware(...middleWares));

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextReducer = combineReducers(require('./reducers'));
    store.replaceReducer(nextReducer);
  });
}

export default store;
