import { LOGIN_SUCCESS, LOGIN_FAILURE } from './action-types';

export const loginSuccess = ({ payload }) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailure = ({ error }) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
