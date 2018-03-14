import { createStore } from 'redux';
import { reducer } from './../reducers/reducer';

const initialState = {
  url: '',
  loading: false,
  error: false,
};

export const store = createStore(reducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// const ConnectedApp = connect((state) => {
//   console.log(state);
//   return state;
// })(App);
