import { Breakpoints } from "../config";

export const getCurrentBreakpoint = ({ screenWidth }) => {
  const breakpointKey = Object.entries(Breakpoints.checkFunctions)
  .filter(([, checkFn ]) => checkFn({ screenWidth }))[0][0];
  return Breakpoints.stringMap[breakpointKey]
};