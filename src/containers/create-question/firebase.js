import { database } from 'firebase';
import { QUESTIONS, TEXT } from '../../constants/questions.firebase';
import { CREATED_AT, USER_ID } from '../../constants/shared.firebase';

export const saveQuestion = ({ question, userId }) =>
  database.ref(`${QUESTIONS}`)
    .push({
      [TEXT]: question,
      [USER_ID]: userId,
      [CREATED_AT]: database.ServerValue.TIMESTAMP,
    });
