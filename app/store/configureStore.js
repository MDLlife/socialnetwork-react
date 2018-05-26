import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
// import { fromJS } from 'immutable';

import apiMiddleware from '../middleware/api';
import {createLogger} from 'redux-logger';
import rootReducer from '../reducers';

//predicate true means log every http request
const logger = createLogger({
  level: 'info',
  collapsed: false,
  logger: console,
  predicate: (getState, action) => false
});

export default function configureStore(_browserHistory,initialState) {
  const routing = routerMiddleware(_browserHistory);
  
  const createStoreWithMiddleware = applyMiddleware(
    routing,
    thunkMiddleware,
    apiMiddleware,
    logger
  )(createStore);

  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
