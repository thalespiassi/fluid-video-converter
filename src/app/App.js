import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import Router from './router';
import store from './store';
import ElectronEvents from './components/ElectronEvents';

function App() {
  return (
    <Provider store={store}>
      <ElectronEvents />
      <Router />
    </Provider>
  );
}

export default App;
