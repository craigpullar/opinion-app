export const valueMap = {
  MOBILE: 770,
  TABLET: 1024,
  DESKTOP: 1368,
};

export const checkFunctions = {
  MOBILE: ({ screenWidth }) => screenWidth <= valueMap.MOBILE,
  TABLET: ({ screenWidth }) =>
    screenWidth <= valueMap.TABLET && screenWidth > valueMap.MOBILE,
  DESKTOP: ({ screenWidth }) =>
    screenWidth <= valueMap.DESKTOP && screenWidth > valueMap.TABLET,
  LG_DESKTOP: ({ screenWidth }) =>
    screenWidth > valueMap.DESKTOP,
};

export const stringMap = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  DESKTOP: 'desktop',
};

export default {
  valueMap,
  checkFunctions,
  stringMap,
};