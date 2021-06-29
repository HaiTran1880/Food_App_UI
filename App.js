import React from 'react';
import All from './src/routers/StackNavigation';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { ADDFOOD } from './src/actions/actionTypes';
import rootReducer from './src/reducers/index'
const store = createStore(rootReducer)
const App = () => {
  return (
    <Provider store={store}>
      <All />
    </Provider>
  )
}
export default App;
