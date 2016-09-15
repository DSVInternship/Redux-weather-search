import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducers from './reducers/index.js';

const middleware = applyMiddleware(logger(),promise(), thunk);

export default createStore(reducers, middleware);
