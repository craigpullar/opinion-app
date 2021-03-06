import React from 'react';
import { Route } from 'react-router-dom';
import { Breakpoints } from '../config';

export const getCurrentBreakpoint = ({ screenWidth }) => {
  const breakpointKey = Object.entries(Breakpoints.checkFunctions)
    .filter(([, checkFn]) => checkFn({ screenWidth }))[0][0];
  return Breakpoints.stringMap[breakpointKey];
};

/* eslint-disable react/prop-types */
export const renderRoute = ({ url, container: Container }) =>
  <Route key={url} path={url} render={() => <Container />} exact />;
/* eslint-enable react/prop-types */
