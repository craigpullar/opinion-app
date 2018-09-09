import { auth } from 'firebase';

export const loginUser = ({ email, password }) =>
  auth().signInWithEmailAndPassword(email, password);
