
export const REQUESTED_DOG = 'REQUESTED_DOG';
export const requestDog = (value) => ({ type: 'REQUESTED_DOG' });

export const REQUESTED_DOG_SUCCEEDED = 'REQUESTED_DOG_SUCCEEDED';
export const requestDogSuccess = (data) => ({ type: 'REQUESTED_DOG_SUCCEEDED',
  url: data.message });

export const REQUESTED_DOG_FAILED = 'REQUESTED_DOG_FAILED';
export const requestDogError = (value) => ({ type: 'REQUESTED_DOG_FAILED' });
