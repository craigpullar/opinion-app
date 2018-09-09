import { saveQuestion } from './firebase';
import { createQuestionSuccess, createQuestionFailure } from './actions';

export const createQuestionThunk = ({ question, userId }) =>
  dispatch => saveQuestion({ question, userId })
    .then(() => dispatch(createQuestionSuccess({ payload: { question, userId } })))
    .catch(error => dispatch(createQuestionFailure({ error })));
