import { auth, database } from 'firebase';
import { USERS, EMAIL, USERNAME } from '../../constants/users.firebase';
import { CREATED_AT } from '../../constants/shared.firebase';

export const saveUser = ({ username, email }) =>
  database().ref(`${USERS}`)
    .push({
      [EMAIL]: email,
      [USERNAME]: username,
      [CREATED_AT]: database.ServerValue.TIMESTAMP,
    });

export const signUpUser = ({ username, email, password }) =>
  auth().createUserWithEmailAndPassword(email, password)
    .then(() => saveUser({ username, email }))
    .catch(console.error);
