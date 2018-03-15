import {CALLING_DOG, CALLING_DOG_READY, CALLING_DOG_FAIL } from '../actions/index';

export const reducer = (state, action) => {
  switch (action.type) {
  case CALLING_DOG:
    return {
      url: '',
      loading: true,
      error: false,
    };
  case CALLING_DOG_READY:
    return {
      url: action.url,
      loading: false,
      error: false,
    };
  case CALLING_DOG_FAIL:
    return {
      url: '',
      loading: false,
      error: true,
    };

  default:
    return state;
  }
};
