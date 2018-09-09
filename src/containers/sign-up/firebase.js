import firebase from 'firebase';
import { USERS, EMAIL, USERNAME } from '../../constants/users.firebase';
import { CREATED_AT } from '../../constants/shared';

export const saveUser = ({ username, email }) =>
  firebase.database().ref(`${USERS}`)
    .push({
      [EMAIL]: email,
      [USERNAME]: username,
      [CREATED_AT]: firebase.database.ServerValue.TIMESTAMP,
    });

export const signUpUser = ({ username, email, password }) =>
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => saveUser({ username, email }))
    .catch(console.error);
