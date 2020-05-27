import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import Immutable from 'immutable';
import rootReducer from '../reducers';

const initialState = Immutable.Map();

const logger = createLogger({ stateTransformer: state => state.toJS() });

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(reduxThunk, logger)
);