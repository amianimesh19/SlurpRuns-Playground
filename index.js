/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider as PaperProvider} from 'react-native-paper';
import {useTheme} from './common/util';

function SlurpRuns() {
  const currTheme = useTheme();

  return (
    <PaperProvider theme={currTheme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => SlurpRuns);
