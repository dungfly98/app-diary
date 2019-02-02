import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated',
    'Module RCTImageLoader requires main queue setup',
    'Module RNFetchBlob requires main queue setup',
    'Class RCTCxxModule was not exported', 
]);
AppRegistry.registerComponent('diary', () => App);  
  