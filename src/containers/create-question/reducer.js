import { CREATE_QUESTION_SUCCESS, CREATE_QUESTION_FAILURE } from './action-types';

const defaultState = {

};

const actionMap = {
  [CREATE_QUESTION_SUCCESS]: ({ action, state }) => ({
    ...state,
    question: action.payload.question,
  }),
  [CREATE_QUESTION_FAILURE]: ({ action, state }) => ({
    ...state,
    error: action.payload,
  }),
};

export default (state = defaultState, action) =>
  actionMap[action.type] ? actionMap[action.type]({ action, state }) : state;
