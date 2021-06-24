import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Navigator from './src/navigation';

import rootReducer from './src/redux/rootReducer';

const store = createStore(rootReducer, composeWithDevTools());

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
