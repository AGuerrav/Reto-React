import { createStore } from 'redux';
import {reducer} from './../reducers/reducer';

export const initialState = {
  url: '',
  loading: false,
  error: false,
};

export const store = createStore(reducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
