import { LOGIN_SUCCESS, LOGIN_FAILURE } from './action-types';

const defaultState = {
  email: '',
};

const actionMap = {
  [LOGIN_SUCCESS]: ({ state, action }) => ({
    ...state,
    email: action.payload.email,
  }),
  [LOGIN_FAILURE]: ({ state, action }) => ({
    ...state,
    error: action.payload,
  }),
};

export default (state = defaultState, action) =>
  actionMap[action.type] ? actionMap[action.type]({ state, action }) : defaultState;
