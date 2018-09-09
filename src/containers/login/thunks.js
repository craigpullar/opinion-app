import { loginUser } from './firebase';
import { loginSuccess, loginFailure } from './actions';

export const loginUserThunk = ({ email, password }) => dispatch =>
  loginUser({ email, password })
    .then(() => dispatch(loginSuccess({ payload: { email } })))
    .catch(error => dispatch(loginFailure({ error })));
