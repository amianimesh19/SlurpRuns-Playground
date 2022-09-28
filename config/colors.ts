import {DarkTheme, DefaultTheme} from 'react-native-paper';

export const lightTheme = {
  ...DefaultTheme,
  roundness: 8,
  colors: {
    ...DefaultTheme.colors,

    primary: '#F33061', // darker version of our pink
    secondary: '#4392F1',
    accent: '#F1D5A4', // our gold
    error: '#82013d', // a more pink version of an error color
    brandGreen: '#4BB543',
    brandAlert: '#FF0000',
    brandBlack: '#333333',

    brandPink_05: 'rgba(243, 48, 97, 0.15)',
    brandBlue_15: 'rgba(67, 146, 241, 0.15)',

    pureWhite: '#FFFFFF',
    pitchBlack: '#000000',

    grey01: '#474747',
    grey02: '#343434',
    grey500: '#1F1F1F',
    grey400: '#787878',
    grey300: '#BBBBBB',
    grey200: '#E8E8E8',
    grey100: '#F3F3F3',

    reactionBar_BG: 'rgba(248, 248, 248, 1)',

    backgroundTransparent: 'rgba(255, 255, 255, 0.9)',

    // used by react navigation
    border: '#c7c7cc',
    card: DefaultTheme.colors.surface, // must be same as surface
    socialLoginIcon: '#ffffff',
    socialLoginIconBG: '#000000',
    brandRed: '#FF0000',
  },
};

export const darkTheme = {
  ...DarkTheme,
  roundness: 8,
  colors: {
    ...DarkTheme.colors,

    primary: '#F33061',
    secondary: '#4392F1',
    accent: '#F1D5A4',
    error: '#82013d',
    brandGreen: '#4BB543',
    brandAlert: '#FF0000',
    brandBlack: '#333333',

    brandPink_05: 'rgba(243, 48, 97, 0.15)',
    brandBlue_15: 'rgba(67, 146, 241, 0.15)',

    pureWhite: '#FFFFFF',
    pitchBlack: '#000000',

    grey01: '#474747',
    grey02: '#343434',
    grey500: '#1F1F1F',
    grey400: '#787878',
    grey300: '#BBBBBB',
    grey200: '#E8E8E8',
    grey100: '#F3F3F3',

    reactionBar_BG: 'rgba(248, 248, 248, 1)',

    backgroundTransparent: 'rgba(255, 255, 255, 0.9)',

    // used by react navigation
    border: '#ffffff',
    card: DarkTheme.colors.surface, // must be same as surface
    socialLoginIcon: '#000000',
    socialLoginIconBG: '#ffffff',
    brandRed: '#FF0000',
  },
};
