import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

export default function configureStore(reducers) {
  return createStore(reducers, applyMiddleware(thunkMiddleware, logger));
}
