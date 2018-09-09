import {
  createStore, applyMiddleware, combineReducers, compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import AppReducer from '../containers/reducer';
import SignUpReducer from '../containers/sign-up/reducer';
import LoginReducer from '../containers/login/reducer';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = typeof window === 'object'
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;
/* eslint-enable */

const store = createStore(
  combineReducers({
    app: AppReducer,
    signUp: SignUpReducer,
    login: LoginReducer,
  }),
  composeEnhancers(applyMiddleware(thunk), applyMiddleware(logger)),
);

export default store;
