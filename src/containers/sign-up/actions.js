import { SIGN_UP_USER_SUCCESS, SIGN_UP_USER_FAILURE } from './action-types';

export const signUpUserSuccess = ({ payload }) => ({
  type: SIGN_UP_USER_SUCCESS,
  payload,
});

export const signUpUserFailure = ({ error }) => ({
  type: SIGN_UP_USER_FAILURE,
  payload: error,
});
