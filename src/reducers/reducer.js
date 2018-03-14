import { REQUESTED_DOG } from './../actions';
import { REQUESTED_DOG_SUCCEEDED } from './../actions';
import { REQUESTED_DOG_FAILED } from './../actions';


export const reducer = (state, action) => {
  switch (action.type) {
  case REQUESTED_DOG:
    return {
      url: '',
      loading: true,
      error: false,
    };
  case REQUESTED_DOG_SUCCEEDED:
    return {
      url: action.url,
      loading: false,
      error: false,
    };
  case REQUESTED_DOG_FAILED:
    return {
      url: '',
      loading: false,
      error: true,
    };
  default:
    return state;
  }
};
