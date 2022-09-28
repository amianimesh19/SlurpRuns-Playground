import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import iconFont from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';
import {useTheme} from './common/util';
import {Provider as PaperProvider} from 'react-native-paper';

const IoniconsStyles = `@font-face {
  src: url(${iconFont});
  font-family: MaterialIcons;
}`;

const style = document.createElement('style');
style.type = 'text/css';

if (style.styleSheet) {
  style.styleSheet.cssText = IoniconsStyles;
} else {
  style.appendChild(document.createTextNode(IoniconsStyles));
}

document.head.appendChild(style);

if (module.hot) {
  module.hot.accept();
}

function SlurpRuns() {
  const currTheme = useTheme();

  return (
    <PaperProvider theme={currTheme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => SlurpRuns);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
