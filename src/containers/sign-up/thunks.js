import { signUpUserSuccess, signUpUserFailure } from './actions';
import { signUpUser } from './firebase';

export const signUpUserThunk = ({ username, email, password }) =>
  dispatch =>
    signUpUser({ username, email, password })
      .then(() => dispatch(signUpUserSuccess({ payload: { username, email } })))
      .catch(error => dispatch(signUpUserFailure({ error })));
