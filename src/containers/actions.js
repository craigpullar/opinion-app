import { UPDATE_RESPONSIVE_BREAKPOINT } from './action-types';

export const updateResponsiveBreakpoint = ({ breakpoint }) => ({
  type: UPDATE_RESPONSIVE_BREAKPOINT,
  payload: breakpoint,
});

export default updateResponsiveBreakpoint;
