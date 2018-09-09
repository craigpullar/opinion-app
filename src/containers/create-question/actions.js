import { CREATE_QUESTION_SUCCESS, CREATE_QUESTION_FAILURE } from './action-types';

export const createQuestionSuccess = ({ payload }) => ({
  type: CREATE_QUESTION_SUCCESS,
  payload,
});

export const createQuestionFailure = ({ error }) => ({
  type: CREATE_QUESTION_FAILURE,
  payload: error,
});
