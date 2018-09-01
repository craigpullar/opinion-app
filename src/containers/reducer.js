import { combineReducers } from 'redux';
import { UPDATE_RESPONSIVE_BREAKPOINT } from './action-types';

const ReducerMap = {
  DEFAULT: {
    ...combineReducers({}),
    currentBreakpoint: "",
  },
  [UPDATE_RESPONSIVE_BREAKPOINT]: ({ previousState, payload }) => ({
    ...previousState,
    currentBreakpoint: payload,
  }),
};

export default (previousState = ReducerMap.DEFAULT, { type, payload }) =>
  ReducerMap[type] ? ReducerMap[type]({ previousState, payload }) : previousState;
