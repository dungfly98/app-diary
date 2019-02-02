import React, { PureComponent } from 'react';
import  { SlineMenu }  from './src/config/Router';
import { Provider } from 'react-redux';
import store from './src/redux/store/Store';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
          <SlineMenu/>
      </Provider>
    );
  }
}

export default App;