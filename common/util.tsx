import {ColorSchemeName, useColorScheme as _useColorScheme} from 'react-native';
import {darkTheme, lightTheme} from '../config/colors';

// The useColorScheme value is always either light or dark, but the built-in
// type suggests that it can be null. This will not happen in practice, so this
// makes it a bit easier to work with.
export function useColorScheme(): NonNullable<ColorSchemeName> {
  return _useColorScheme() as NonNullable<ColorSchemeName>;
}

export function useTheme() {
  if (useColorScheme() === 'light') {
    return lightTheme;
  } else {
    return darkTheme;
  }
}

//   return lightTheme;
