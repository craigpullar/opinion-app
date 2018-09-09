import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import AppReducer from '../containers/reducer';
import SignUpReducer from '../containers/sign-up/reducer';

const store = createStore(
  combineReducers({ app: AppReducer, signUp: SignUpReducer }),
  applyMiddleware(thunk),
);

export default store;
