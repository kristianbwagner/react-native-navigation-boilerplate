/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

// For now until 0.61 is updated with deprecration warnings
console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
