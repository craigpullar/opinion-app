import { SIGN_UP_USER_SUCCESS } from './action-types';

const defaultState = {};
const actionMap = {
  [SIGN_UP_USER_SUCCESS]: ({ state, action }) => ({
    ...state,
    username: action.payload.username,
    email: action.payload.email,
  }),
};

export default (state = defaultState, action) =>
  actionMap[action.type] ? actionMap[action.type]({ state, action }) : state;
