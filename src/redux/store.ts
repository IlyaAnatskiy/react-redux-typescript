import { createStore, compose, applyMiddleware } from 'redux';
import { save } from 'redux-localstorage-simple';

import { rootReducer } from './reducers';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(save({ namespace: 'todos' }))),
);

export default store;
