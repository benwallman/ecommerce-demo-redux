import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import rootReducer from './reducers/root';

const configureStore = (initialState={ loggedIn: false }) => createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);

export default configureStore;
